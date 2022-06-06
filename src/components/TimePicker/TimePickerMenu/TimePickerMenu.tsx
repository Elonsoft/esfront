import React, { FC, useEffect, useState } from 'react';
import { useMemo } from 'react';

import { TimePickerMenuProps } from './TimePickerMenu.types';

import { useThemeProps } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';

import { TimePickerMenuItem } from '../TimePickerMenuItem';

export const TimePickerMenu: FC<TimePickerMenuProps> = (inProps) => {
  const { onChange, value, label, renderInput, inputProps, minTime, inputFormat, maxTime } = useThemeProps({
    props: inProps,
    name: 'ESTimePickerMenu'
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [hours, setHours] = useState<number>(value.getHours());
  const [minutes, setMinutes] = useState<number>(value.getMinutes());
  const [seconds, setSeconds] = useState<number>(value.getSeconds());

  useEffect(() => {
    setHours(value.getHours());
    setMinutes(value.getMinutes());
    setSeconds(value.getSeconds());
  }, [value]);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const onChangeHours = (hours: number) => {
    setHours(hours);

    onChange(new Date(0, 0, 0, hours, minutes, seconds));
  };

  const onChangeMinutes = (minutes: number) => {
    setMinutes(minutes);

    onChange(new Date(0, 0, 0, hours, minutes, seconds));

    if (inputFormat && !inputFormat?.includes('ss')) {
      onClose();
    }
  };

  const onChangeSeconds = (seconds: number) => {
    setSeconds(seconds);

    onChange(new Date(0, 0, 0, hours, minutes, seconds));
    onClose();
  };

  const displayValue = useMemo(() => {
    const { HH, mm, ss } = {
      HH: hours < 10 ? `0${hours}` : `${hours}`,
      mm: minutes < 10 ? `0${minutes}` : `${minutes}`,
      ss: seconds < 10 ? `0${seconds}` : `${seconds}`
    };

    return `${HH}:${mm}${!inputFormat || inputFormat?.includes('ss') ? `:${ss}` : ''}`;
  }, [hours, minutes, seconds, inputFormat]);

  return (
    <>
      {renderInput({ value: displayValue, label, onClick, inputProps })}

      <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
        <Stack direction="row">
          <TimePickerMenuItem
            title="Часы"
            limit={24}
            onChange={onChangeHours}
            selectedIndex={hours}
            maxTime={maxTime?.getHours()}
            minTime={minTime?.getHours()}
          />
          <TimePickerMenuItem
            title="Мин."
            limit={60}
            onChange={onChangeMinutes}
            selectedIndex={minutes}
            maxTime={maxTime?.getMinutes()}
            minTime={minTime?.getMinutes()}
          />

          {(!inputFormat || inputFormat?.includes('ss')) && (
            <TimePickerMenuItem
              title="Сек."
              limit={60}
              onChange={onChangeSeconds}
              selectedIndex={seconds}
              maxTime={maxTime?.getSeconds()}
              minTime={minTime?.getSeconds()}
            />
          )}
        </Stack>
      </Menu>
    </>
  );
};
