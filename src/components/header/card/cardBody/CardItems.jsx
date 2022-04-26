import {
  List,
  ListItem,
  Typography,
  Divider,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CardRemoveItems from "./cardFeatures/CardRemoveItems";

const CardItems = () => {
  const getCardItems = useSelector((state) => state.entities.card.cardItems);
  return (
    <List>
      {getCardItems.map((item) => (
        <Fragment key={item.id}>
          <CardActions disableSpacing>
            <CardRemoveItems product={item} />
          </CardActions>
          <ListItem disablePadding>
            <Card
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardActionArea component="a" href="#">
                <CardMedia
                  component="img"
                  sx={{
                    width: 90,
                    display: { xs: "none", sm: "block" },
                    maxWidth: { xs: 90, md: 90 },
                    marginInlineStart: 2,
                  }}
                  image={item.image.url}
                  alt={item.name}
                />
              </CardActionArea>
              <CardContent>
                <Typography
                  component="a"
                  href="#"
                  variant="h6"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  {item.price.formatted_with_symbol}x{item.cardQuantity}
                </Typography>
                <Typography variant="body1" color="Highlight" gutterBottom>
                  ${item.price.formatted * item.cardQuantity}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <Divider
            variant="fullWidth"
            component="li"
            sx={{ bgcolor: "GrayText" }}
          />
        </Fragment>
      ))}
    </List>
  );
};
export default CardItems;
