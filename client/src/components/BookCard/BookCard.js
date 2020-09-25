import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const BookCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.media.image}
        title={props.media.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.media.title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          Authors: {props.media.authors}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          Description: {props.media.description}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          link: {props.media.link}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => props.handleSaveBook(props.media.title)}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
