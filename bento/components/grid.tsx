import { motion } from "framer-motion";
import { useEffect, useReducer } from "react";
import { initial, reducer } from "../utils/reducer";

export const Grid = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const draggingItem = state.items.find((i) => i.id === state.dragging?.id);

  const fruit = {
    apple: {
      id: "apple",
      name: "Apple",
      width: 1,
      height: 1,
    },
    melon: {
      id: "melon",
      name: "Melon",
      width: 2,
      height: 2,
    },
    banana: {
      id: "banana",
      name: "Banana",
      width: 1,
      height: 3,
    },
  };

  useEffect(() => {
    // Add first items
    dispatch({
      type: "ADD_ITEM",
      payload: { item: { ...fruit.melon, x: 2, y: 2 } },
    });

    dispatch({
      type: "ADD_ITEM",
      payload: { item: { ...fruit.apple, x: 5, y: 6 } },
    });

    dispatch({
      type: "ADD_ITEM",
      payload: { item: { ...fruit.banana, x: 6, y: 1 } },
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "calc(100vw - 20px)",
        height: "calc(100vh - 20px)",
        overflow: "hidden",
        border: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          display: "grid",
          gridGap: "2px",
          gridAutoRows: "42px",
          gridTemplateColumns: "repeat(10, 42px)",
        }}
      >
        {state.cells.map((row, y) =>
          row.map((_, x) => (
            <div
              style={{
                border: "1px solid #ccc",
              }}
              key={`${y}_${x}`}
            />
          ))
        )}
      </div>
      {state.dragging && draggingItem && (
        <>
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "rgba(239, 239, 239,.8)",
              x: state.dragging.initialPoint.x * 44,
              y: state.dragging.initialPoint.y * 44,
              width: draggingItem.width * 44 - 2,
              height: draggingItem.height * 44 - 2,
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: "1px solid #000",
              backgroundColor: state.dragging.valid
                ? "rgb(152, 195, 121)"
                : "rgb(224, 109, 118)",
              x: state.dragging.nextPoint.x * 44,
              y: state.dragging.nextPoint.y * 44,
              width: draggingItem.width * 44 - 2,
              height: draggingItem.height * 44 - 2,
            }}
          />
        </>
      )}
      {state.items.map((item) => {
        const x = item.x * 44;
        const y = item.y * 44;
        const width = item.width * 44 - 2;
        const height = item.height * 44 - 2;
        const isDragging = item.id === state.dragging?.id;

        return (
          <motion.div
            key={item.id}
            drag
            dragMomentum={false}
            onDragStart={() =>
              dispatch({ type: "DRAG_STARTED", payload: { item } })
            }
            onDragEnd={() =>
              dispatch({ type: "DRAG_ENDED", payload: { item } })
            }
            onDrag={(_, info) => {
              const point = {
                x: Math.min(
                  Math.max(Math.round((x + info.point.x) / 44), 0),
                  10 - item.width
                ),
                y: Math.min(
                  Math.max(Math.round((y + info.point.y) / 44), 0),
                  10 - item.height
                ),
              };

              if (state.dragging) {
                const { nextPoint } = state.dragging;
                if (point.x !== nextPoint.x || point.y !== nextPoint.y) {
                  dispatch({
                    type: "DRAG_MOVED",
                    payload: { item, point },
                  });
                }
              }
            }}
            onAnimationComplete={() => dispatch({ type: "ANIMATION_ENDED" })}
            initial={false}
            animate={!isDragging}
            style={{
              position: "absolute",
              top: y,
              left: x,
              width,
              height,
              border: "1px solid #000",
              backgroundColor: "#efefef",
              fontSize: 10,
              textAlign: "right",
              padding: "2px 4px",
              zIndex: isDragging ? 99 : 1,
            }}
          >
            {item.name}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Grid;
