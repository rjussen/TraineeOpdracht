import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Chip from '@material-ui/core/Chip';
import './Dev.css';

function Dev(props) {
    const imageURL = require(`${props.logo}`);
    let isFeatured;
    let isNew;
    props.featured ? isFeatured=<Chip color="Secondary" size="small" label="Featured!"/> : isFeatured=null;
    props.new ? isNew=<Chip color="primary" size="small" label="New!"/> : isNew=null;

    return(
        <div>
            <Paper className="paperl" spacing={2}>
                <Grid className= "gridmain"container spacing={2}>
                    <Grid item>
                        <ButtonBase>
                            <img alt={props.id} src={imageURL.default} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="body2">
                                    {props.company} {isFeatured} {isNew}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    {props.position}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {props.contract}, {props.location}
                                </Typography>
                                <Typography variant="body2">
                                    {props.postedAt}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs container direction="row" className = "gridr">
                        {props.languages.map((PostLanguages, k) => {
                            return <Chip className="chip" key = {k} label={PostLanguages} variant="outlined" />
                        })}
                        {props.tools.map((PostLanguages, k) => {
                            return <Chip className="chip" key = {k} label={PostLanguages} variant="outlined" />
                        })}

                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}

export default Dev;