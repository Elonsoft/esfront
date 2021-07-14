import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagEu = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 .016H0v15.969h24V.015Z" fill="#0052B4" />
      <path
        d="m12 3.508.24.736h.774l-.627.454.24.735L12 4.98l-.627.454.24-.735-.627-.454h.775L12 3.508ZM8.818 4.824l.69.35.548-.546-.121.764.69.35-.765.122-.121.763-.352-.689-.765.121.548-.546-.352-.69ZM7.5 8l.737-.24v-.772l.455.625.737-.239L8.973 8l.456.625-.737-.239-.455.625v-.773L7.5 8ZM8.818 11.175l.352-.688-.548-.547.765.12.352-.688.12.764.766.12-.69.352.12.763-.547-.546-.69.35ZM12 12.49l-.24-.735h-.774l.627-.454-.24-.735.627.454.627-.454-.24.735.627.454h-.775l-.239.736ZM15.182 11.175l-.69-.35-.548.546.121-.764-.69-.35.765-.121.121-.764.352.689.765-.121-.548.547.352.688ZM16.5 8l-.737.238v.773l-.455-.625-.736.239.455-.625-.455-.626.736.239.455-.625v.773L16.5 8ZM15.182 4.824l-.352.689.548.546-.765-.12-.352.688-.12-.763-.766-.121.69-.351-.12-.764.547.547.69-.351Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};