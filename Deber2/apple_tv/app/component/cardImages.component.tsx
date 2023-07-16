'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

interface RecipeReviewCardProps {
    source: string;
    descripcion: string;
  }
  export default function RecipeReviewCard({ source, descripcion }: RecipeReviewCardProps) {
  
  return (
    <Card>
      <CardMedia
        component="img"
        image={source}
        width={"200 px"}
        height={'100 px'}
        alt={descripcion}
      />
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}
