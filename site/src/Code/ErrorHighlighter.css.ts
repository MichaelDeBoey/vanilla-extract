import { style } from '@vanilla-extract/css';
import { vars } from '../themes.css';

export const errorUnderline = style({
  textDecorationStyle: 'dashed',
  textDecorationColor: vars.palette.red,
  textDecorationThickness: '3px',
  textDecorationLine: 'underline',
  textDecorationSkipInk: 'none',
  textUnderlineOffset: '2px',
});
