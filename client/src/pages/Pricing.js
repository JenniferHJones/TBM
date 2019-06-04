import React from "react";
// import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[400]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing.unit * 2
  },
  CardContent: {
    marginBottom: theme.spacing.unit * 10
  },
  cardActions: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 2
    }
  }
});

const tiers = [
  {
    title: "Basic",
    price: "1.00",
    detail:
      "$250 monthly minimum plus Implementation Fee of 2X the monthly subscription price.",
    description: [
      "Property Management",
      "Owner & Tenant Portals",
      "Maintenance",
      "Accounting"
    ],
    buttonText: "Get started",
    buttonVariant: "contained"
  },
  {
    title: "Plus",
    subheader: "Most popular",
    price: "1.50",
    detail:
      "$350 monthly minimum plus Implementation Fee of 2X the monthly subscription price.",
    description: ["Basic Plan +", "Screening", "Payments"],
    buttonText: "Get started",
    buttonVariant: "contained"
  },
  {
    title: "Premium",
    price: "2.00",
    detail:
      "$450 monthly minimum plus Implementation Fee of 2X the monthly subscription price.",
    description: ["Plus Plan +", "Marketing", "Inspections", "Custom Reports"],
    buttonText: "Get started",
    buttonVariant: "contained"
  }
];

function Pricing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="textSecondary"
          >
            Three tiers to suit your needs
          </Typography>
        </div>
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Premium" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center", variant: "h2" }}
                  subheaderTypographyProps={{ align: "center", variant: "h3" }}
                  action={tier.title === "Plus" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />

                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h3" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                  </div>
                  <Typography
                    variant="h4"
                    align="center"
                    color="textSecondary"
                    component="h4"
                  >
                    Per Unit, Per Month
                  </Typography>
                  <div>
                    <br />
                    <Typography
                      variant="p"
                      align="center"
                      color="textSecondary"
                      component="p"
                    >
                      {tier.detail}
                    </Typography>
                  </div>
                  <div>
                    <Typography />
                  </div>
                  <div>
                    <br />
                    {tier.description.map(line => (
                      <Typography variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                  >
                    <Link to="/register">{tier.buttonText}</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pricing);
