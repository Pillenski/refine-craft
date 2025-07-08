// components/Toolbox.js
import React from "react";
import { Card, Typography, Grid, Button } from "antd";

export const Toolbox = () => {
  return (
    <Card>
      <div>
        <div>
          <Typography>Drag to add</Typography>
        </div>
        <div>
          <Button>Button</Button>
        </div>
        <div>
          <Button>Text</Button>
        </div>
        <div>
          <Button>Container</Button>
        </div>
        <div>
          <Button>Card</Button>
        </div>
      </div>
    </Card>
  )
};