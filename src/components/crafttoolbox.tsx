import React from "react";
import { Card, Typography, Button } from "antd";
import { useEditor } from "@craftjs/core";
import {
  DragButton,
  DragText,
  DragContainer,
  DragCard,
  DragInputField,
  DragSelectField,
} from "./craftnodes";

export const Toolbox = () => {
  const { connectors } = useEditor();
  return (
    <Card style={{ marginBottom: 24 }}>
      <div>
        <Typography style={{ marginBottom: 8 }}>Drag to add</Typography>
        <div ref={(ref) => ref && connectors.create(ref, <DragButton text="Button" />)}>
          <Button>Button</Button>
        </div>
        <div ref={(ref) => ref && connectors.create(ref, <DragText text="Text" />)}>
          <Button>Text</Button>
        </div>
        <div ref={(ref) => ref && connectors.create(ref, <DragContainer />)}>
          <Button>Container</Button>
        </div>
        <div ref={(ref) => ref && connectors.create(ref, <DragCard />)}>
          <Button>Card</Button>
        </div>
        <div ref={(ref) => ref && connectors.create(ref, <DragInputField label="Input" name="newInput" />)}>
          <Button>Input</Button>
        </div>
        <div ref={(ref) =>
            ref &&
            connectors.create(
              ref,
              <DragSelectField
                label="Select"
                name="newSelect"
                options={[{ label: "Option", value: "1" }]}
              />
            )
          }>
          <Button>Select</Button>
        </div>
      </div>
    </Card>  );
};
