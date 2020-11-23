import axios from 'axios';
import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimeters = [KeyCodes.comma, KeyCodes.enter];

class Tags2 extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tags: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.Blur = this.Blur.bind(this);
  }
};
