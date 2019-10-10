import React, { Component } from 'react'

import Drawing from './Drawing'

export default class DrawingContainer extends Component {
  state = {
    newDrawing: false,
    isPaint: false,
    lines: [{ line: [0, 0, 0, 0], color: "green"}],
    drawing: [],
    newLine: [],
    drawings: [],
    color: "blue"
  }

  onTouchStart = (e) => {
    const stage = e.target.getStage()
    
    const pos = stage.getPointerPosition()
    
    this.setState({ 
      isPaint: !this.state.isPaint, 
      newLine: [pos.x, pos.y], 
      drawing: [pos.x, pos.y] })

  }

  onTouchEnd = (e) => {
    // const pos = e.target.getPointerPosition()
    // const newLine = this.state.newLine.concat([pos.x, pos.y])
    // console.log('new line:', newLine)
    this.setState({ 
      isPaint: !this.state.isPaint })
  }

  onTouchMove = (e) => {
    
    if (this.state.isPaint) {
      const stage = e.target.getStage()
      const pos = stage.getPointerPosition()
      console.log('stage:', stage, 'pos:', pos)
      const newLine = this.state.newLine.concat([pos.x, pos.y])
      const newLineColored = { line: newLine, color: this.state.color }
      console.log('new line:', newLine)
      this.setState({ 
        lines: this.state.lines.concat([newLineColored]), 
        newLine: [pos.x, pos.y] 
      })
    }  
  }

  onDragStart = (e) => {
    
    const stage = e.target.getStage()
    const pos = stage.getPointerPosition()
    e.target.setAttrs({
      x: pos.x,
      y: pos.y
    })
    const drawing = stage.toDataURL()
    this.setState({ lines: [[0, 0, 0, 0]], drawings: this.state.drawings.concat(drawing), newDrawing: !this.state.newDrawing})
    // console.log('dataUrl:', dataUrl)
  }

  newDrawingFn = (e) => {
    this.setState({ newDrawing: !this.state.newDrawing })
  }

  changeColor = (e) => {
    this.setState({ color: e.currentTarget.dataset.color })
  }

  render() {
    console.log('state:', this.state)
    return (
      <div>
        
        <Drawing
        isPaint={this.state.isPaint} 
        lines={this.state.lines}
        drawing={this.state.drawing}
        drawings={this.state.drawings}
        color={this.state.color}
        newDrawing={this.state.newDrawing}
        onTouchMove={this.onTouchMove}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onDragStart={this.onDragStart}
        newDrawingFn={this.newDrawingFn}
        changeColor={this.changeColor}
         />
      </div>
    )
  }
}

