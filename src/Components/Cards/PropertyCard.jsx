import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ScaleIcon from '@mui/icons-material/Scale';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import "./card.scss"

const PropertyCard=(props)=>{
    const home=props.Home;
    
    return (
        <div className="card">
           <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={home.img}
                        alt="green iguana"
                    />

                    <div className="heading">
                       <FavoriteIcon className="likeIcon"
                                     sx={{color:"gray"}}
                       />
                       <h1>{home.name}</h1>
                       {home.likes>10?
                         <LocalFireDepartmentIcon className="fireIcon" />:''
                       } 
                    </div>
                    <CardContent>
                        <div className="price">
                            <span className="amount">
                                $ {home.rent}
                            </span>
                            &nbsp;/month
                        </div>
                        <div className="propertyType">
                            {home.propertyType}
                            <br/>

                            <div className="details">
                                <SingleBedIcon/>
                                &nbsp;{home.rooms}-bed  |&nbsp;  
                                <BathtubIcon/>
                                &nbsp;{home.bathrooms}-bath  |&nbsp; 
                                <ScaleIcon/>
                                &nbsp;{home.dimensions.height}x{home.dimensions.width} sqft
                            </div>
                        </div>
                        <div className="availableFrom">
                            Available From : {home.availableFrom}
                        </div>
                        <div className="address">
                            {home.Address.street}, {home.Address.city}, {home.Address.country}
                        </div>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" 
                            color="primary"
                     >
                           Share
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default PropertyCard;