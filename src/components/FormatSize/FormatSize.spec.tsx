import { render, screen } from '../../testing';

import { FormatSize } from './FormatSize';

const METRIC_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
const BINARY_UNITS = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];

describe('FormatSize', () => {
  it('Should format to B', () => {
    render(<FormatSize prefix="metric">500</FormatSize>);
    expect(screen.queryByText('500 B')).toBeInTheDocument();
  });

  it('Should format to KB', () => {
    render(<FormatSize prefix="metric">1000</FormatSize>);
    expect(screen.queryByText('1 KB')).toBeInTheDocument();
  });

  it('Should format to MB', () => {
    render(<FormatSize prefix="metric">{10 ** 6}</FormatSize>);
    expect(screen.queryByText('1 MB')).toBeInTheDocument();
  });

  it('Should format to float number with metric prefix', () => {
    render(<FormatSize prefix="metric">1500</FormatSize>);
    expect(screen.queryByText('1.5 KB')).toBeInTheDocument();
  });

  it('Should format to PB', () => {
    render(
      <FormatSize metricUnits={METRIC_UNITS} prefix="metric">
        {10 ** 15}
      </FormatSize>
    );
    expect(screen.queryByText('1 PB')).toBeInTheDocument();
  });

  it('Should format to KiB', () => {
    render(<FormatSize prefix="binary">1024</FormatSize>);
    expect(screen.queryByText('1 KiB')).toBeInTheDocument();
  });

  it('Should format to MiB', () => {
    render(<FormatSize prefix="binary">{2 ** 20}</FormatSize>);
    expect(screen.queryByText('1 MiB')).toBeInTheDocument();
  });

  it('Should format to float number with binary prefix', () => {
    render(<FormatSize prefix="binary">1536</FormatSize>);
    expect(screen.queryByText('1.5 KiB')).toBeInTheDocument();
  });

  it('Should format to PiB', () => {
    render(
      <FormatSize binaryUnits={BINARY_UNITS} prefix="binary">
        {2 ** 50}
      </FormatSize>
    );
    expect(screen.queryByText('1 PiB')).toBeInTheDocument();
  });
});
