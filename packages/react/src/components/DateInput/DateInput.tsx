import { useEffect, useMemo, useRef, useState } from 'react';

import { DateInputField, DateInputProps } from './DateInput.types';

import { DateInputRegistry } from './DateInput.registry';

import { useDateAdapterContext } from '../DateAdapter';

const getDate = (
  year: number,
  month: number,
  date: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
) => {
  return new Date(
    Date.parse(
      `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`
    )
  );
};

const dateToValue = (date: Date): Record<DateInputField, string> => {
  return {
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString(),
    date: date.getDate().toString(),
    hours: date.getHours().toString(),
    minutes: date.getMinutes().toString(),
    seconds: date.getSeconds().toString(),
    milliseconds: date.getMilliseconds().toString(),
  };
};

const valueToDate = (value: Record<DateInputField, string>): Date => {
  return new Date(
    +value.year,
    Math.max(+value.month - 1, 0),
    +value.date,
    +value.hours,
    +value.minutes,
    +value.seconds,
    +value.milliseconds
  );
};

const MIN_DATE = getDate(1, 1, 1, 0, 0, 0, 0);
const MAX_DATE = getDate(9999, 12, 31, 23, 59, 59, 999);

const EMPTY = {
  year: '',
  month: '',
  date: '',
  hours: '',
  minutes: '',
  seconds: '',
  milliseconds: '',
};

export const DateInput = ({
  minDate = MIN_DATE,
  maxDate = MAX_DATE,
  format = 'YYYY.MM.dd HH:mm',
  onChange,
}: DateInputProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { adapter } = useDateAdapterContext();

  const tokens = useMemo(() => {
    const regexp = new RegExp(`(${Array.from(DateInputRegistry.keys()).join('|')})`);
    return format.split(regexp).filter(Boolean) as Array<DateInputField | string>;
  }, [format]);

  const [value, setValue] = useState<Record<DateInputField, string>>(EMPTY);
  const [currentToken, setCurrentToken] = useState<string | null>(null);

  const { empty, filled } = useMemo(() => {
    const keys = tokens.filter((token) => !!DateInputRegistry.get(token));
    const formatters = keys.map((key) => DateInputRegistry.get(key)!);

    const empty = formatters.every((formatter) => !value[formatter.field]);
    const filled = formatters.every((formatter) => !!value[formatter.field]);

    return { empty, filled };
  }, [value, tokens]);

  useEffect(() => {
    if (onChange) {
      if (filled) {
        const date = valueToDate(value);
        onChange(date);
      } else if (empty) {
        onChange(null);
      }
    }
  }, [value, empty, filled]);

  const getAnchorElement = (target?: HTMLElement): HTMLElement | null => {
    const selection = window.getSelection();

    if (ref.current && selection) {
      let element = target || (selection.anchorNode as HTMLElement | null | undefined);

      if (!ref.current.contains(element || null)) {
        return null;
      }

      // TEXT_NODE
      if (element?.nodeType === 3) {
        element = element.parentElement;
      }

      element = element?.closest('span[data-node]');

      if (element) {
        if (!element.dataset.token) {
          if (selection.anchorOffset < (selection.anchorNode?.textContent?.length || 0) / 2) {
            element = element.previousElementSibling as HTMLElement | null;
          } else {
            element = element.nextElementSibling as HTMLElement | null;
          }
        }

        if (element) {
          return element;
        }
      }
    }

    return null;
  };

  const select = (element: HTMLElement) => {
    requestAnimationFrame(() => {
      const selection = window.getSelection();

      if (ref.current && selection) {
        if (element) {
          setCurrentToken(element.dataset?.token || null);

          setTimeout(() => {
            const range = document.createRange();
            range.selectNodeContents(element);

            selection.removeAllRanges();
            selection.addRange(range);
          }, 1);
        }
      }
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Tab') {
      return;
    }

    e.preventDefault();

    if (!ref.current) {
      return;
    }

    const selection = window.getSelection();

    if (ref.current === selection?.anchorNode) {
      switch (e.key) {
        case 'ArrowLeft': {
          const elements = ref.current.querySelectorAll('span[data-token]');

          if (elements.length) {
            select(elements[0] as HTMLElement);
          }

          return;
        }
        case 'ArrowRight': {
          const elements = ref.current.querySelectorAll('span[data-token]');

          if (elements.length) {
            select(elements[elements.length - 1] as HTMLElement);
          }

          return;
        }
        case 'ArrowUp':
        case '+': {
          if (filled) {
            setValue(
              dateToValue(new Date(Math.min(maxDate.getTime(), adapter!.addDays(valueToDate(value), 1).getTime())))
            );
          } else {
            setValue(dateToValue(minDate));
          }

          return;
        }
        case 'PageUp': {
          if (filled) {
            setValue(
              dateToValue(new Date(Math.min(maxDate.getTime(), adapter!.addDays(valueToDate(value), 5).getTime())))
            );
          } else {
            setValue(dateToValue(minDate));
          }

          return;
        }
        case 'ArrowDown':
        case '-': {
          if (filled) {
            setValue(
              dateToValue(new Date(Math.max(minDate.getTime(), adapter!.addDays(valueToDate(value), -1).getTime())))
            );
          } else {
            setValue(dateToValue(maxDate));
          }

          return;
        }
        case 'PageDown': {
          if (filled) {
            setValue(
              dateToValue(new Date(Math.max(minDate.getTime(), adapter!.addDays(valueToDate(value), -5).getTime())))
            );
          } else {
            setValue(dateToValue(maxDate));
          }

          return;
        }
        case 'Home': {
          setValue(dateToValue(minDate));
          return;
        }
        case 'End': {
          setValue(dateToValue(maxDate));
          return;
        }
        case 'Delete':
        case 'Backspace': {
          setValue(EMPTY);
          return;
        }
      }

      return;
    }

    const element = getAnchorElement();

    if (!element) {
      return;
    }

    const token = element.dataset.token;

    if (!token) {
      return;
    }

    const field = DateInputRegistry.get(token);

    if (!field) {
      return;
    }

    const formatTokens = Array.from(ref.current.querySelectorAll('span[data-token]')) as HTMLElement[];

    const selectPrev = () => {
      if (selection) {
        const index = formatTokens.indexOf(element);

        if (index !== -1) {
          const prevElement = formatTokens[index - 1] || formatTokens[formatTokens.length - 1];
          select(prevElement);
        }
      }
    };

    const selectNext = () => {
      if (selection) {
        const index = formatTokens.indexOf(element);

        if (index !== -1) {
          const nextElement = formatTokens[index + 1] || formatTokens[0];
          select(nextElement);
        }
      }
    };

    if (e.key === 'Delete') {
      setValue((prev) => ({ ...prev, [field.field]: '' }));
      select(element);
      return;
    }

    if (e.key === 'Backspace') {
      if (value[field.field]) {
        setValue((prev) => ({ ...prev, [field.field]: prev[field.field].substring(0, prev[field.field].length - 1) }));
        select(element);
      } else {
        selectPrev();
      }

      return;
    }

    if (e.key === 'ArrowLeft') {
      selectPrev();
      return;
    }

    if (e.key === 'ArrowRight') {
      selectNext();
      return;
    }

    if (e.key === 'ArrowUp' || e.key === '+') {
      setValue((prev) => ({ ...prev, [field.field]: field.getNext(value[field.field], 1, value) }));
      select(element);
      return;
    }

    if (e.key === 'ArrowDown' || e.key === '-') {
      setValue((prev) => ({ ...prev, [field.field]: field.getPrev(value[field.field], 1, value) }));
      select(element);
      return;
    }

    if (e.key === 'PageUp') {
      setValue((prev) => ({ ...prev, [field.field]: field.getNext(value[field.field], 5, value) }));
      select(element);
      return;
    }

    if (e.key === 'PageDown') {
      setValue((prev) => ({ ...prev, [field.field]: field.getPrev(value[field.field], 5, value) }));
      select(element);
      return;
    }

    const variants = field.getValues(value[field.field], e.key, value);

    if (variants.length) {
      setValue((prev) => ({ ...prev, [field.field]: variants[0] }));

      if (variants.length === 1) {
        if (selection) {
          const index = formatTokens.indexOf(element);

          if (index !== -1) {
            const nextElement = formatTokens[index + 1];

            if (nextElement) {
              select(nextElement);
            }
          }
        }
      } else {
        select(element);
      }
    } else {
      // TODO: Blinking?
    }
  };

  const onBlur = () => {
    setCurrentToken(null);

    requestAnimationFrame(() => {
      const selection = window.getSelection();

      if (ref.current && selection && ref.current.contains(selection.anchorNode)) {
        selection.removeAllRanges();
      }
    });
  };

  const onFocus = () => {
    if (ref.current) {
      select(ref.current);
    }
  };

  const onMouseUp = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const element = getAnchorElement(target === ref.current ? (target.lastChild as HTMLElement) : target);

    if (element) {
      select(element);
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'none';
  };

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className="es-date-input"
      inputMode="numeric"
      onBlur={onBlur}
      onDragOver={onDragOver}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onMouseUp={onMouseUp}
    >
      {tokens.map((token, index) => {
        const field = DateInputRegistry.get(token);

        return (
          <span key={index} data-node {...(field ? { 'data-token': token } : {})}>
            {field ? field.getPlaceholder(value[field.field], currentToken === token, value) : token}
          </span>
        );
      })}
    </div>
  );
};
