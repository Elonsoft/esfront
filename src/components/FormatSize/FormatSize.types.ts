export interface FormatSizeProps {
  /** Size in bytes to format.  */
  children: number | string;

  /**
   * Use powers of 10 or powers of 2.
   * @default 'metric'
   */
  prefix?: 'metric' | 'binary';

  /** Units for the metric prefix.  */
  metricUnits?: string[];
  /** Units for the binary prefix. */
  binaryUnits?: string[];
}
