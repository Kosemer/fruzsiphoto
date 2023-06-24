import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import cars from "./car.json";
import classes from "./UpdateImageOrder.module.css";

export default function UpdateImageOrder() {
  const [items, setItems] = useState(cars);

  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
  }

  return (
    <Box className={classes.App}>
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={4}
          rowHeight={280}
          style={{ height: 280 * Math.ceil(items.length / 4) }}
        >
          {items.map((item) => (
            <GridItem key={item.id}>
              <Card
                sx={{ marginRight: 2, marginBottom: 2, cursor: "-webkit-grab" }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
      <button type="button" onClick={() => console.log("state", items)}>
        State
      </button>
    </Box>
  );
}
