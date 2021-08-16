import React from 'react';
import * as actions from './actiontypes';

export default function viewReducer (state = [], action) {
    switch(action.type){
      case actions.RIGHT:
        return {view: 'Right Wing'}
      case actions.LEFT:
        return {view: 'Left Wing'}
      case actions.LIBERTARIAN:
        return {view: 'Libertarian'}
      default:
        return state;
    }
  }
  