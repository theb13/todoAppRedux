import React from 'react';
import If from './If';

export default props => (
   <If test={!props.hide}>
      <button className={'btn btn-' + props.type+' '+props.extra } onClick={props.onClick}>
         <i className={'fa fa-' + props.icon} />
      </button>
   </If>
)