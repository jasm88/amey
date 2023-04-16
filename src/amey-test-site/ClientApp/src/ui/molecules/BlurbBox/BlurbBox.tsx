import React from "react";
import "./BlurbBox.scss";

interface BlurbBoxProps {
  introduction?: string | undefined
  body: string;
}

export const BlurbBox: React.FC<BlurbBoxProps> = ({
  introduction,
  body,
}: BlurbBoxProps) => {
  return (
    <div className="BlurbBox">
    {  !introduction !== undefined ? <p className="BlurbBox__introduction">{introduction}</p> : null }
      <div className="BlurbBox__body">
        { body }
      </div>
    </div>
  );
};
