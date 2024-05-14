import { Tooltip } from "@mui/material";

function TooltipWrapper({ className, ...props }) {
  return (
    <Tooltip
      componentsProps={{ tooltip: { className: className } }}
      {...props}
    />
  );
}

export default TooltipWrapper;
