import React, { Component } from 'react'
import HeaderContainer from '../Header/HeaderContainer'
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

  onMouseDown = (e) => {
    const stage = e.target.getStage()
    const pos = stage.getPointerPosition()
    this.setState({ 
      isPaint: !this.state.isPaint, 
      newLine: [pos.x, pos.y], 
      drawing: [pos.x, pos.y] })

  }

  onMouseUp = (e) => {
    // const pos = e.target.getPointerPosition()
    // const newLine = this.state.newLine.concat([pos.x, pos.y])
    // console.log('new line:', newLine)
    this.setState({ 
      isPaint: !this.state.isPaint })
  }

  onMouseMove = (e) => {
    
    if (this.state.isPaint) {
      const stage = e.target.getStage()
      const pos = stage.getPointerPosition()
      const newLine = this.state.newLine.concat([pos.x, pos.y])
      const newLineColored = { line: newLine, color: this.state.color }
      console.log('new line:', newLine)
      this.setState({ 
        lines: this.state.lines.concat([newLineColored]), 
        newLine: [pos.x, pos.y] 
      })
    }  
  }

  onMouseLeave = (e) => {
    const stage = e.target.getStage()
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
        <HeaderContainer />
        <Drawing
        isPaint={this.state.isPaint} 
        lines={this.state.lines}
        drawing={this.state.drawing}
        drawings={this.state.drawings}
        color={this.props.color}
        newDrawing={this.state.newDrawing}
        onMouseMove={this.onMouseMove}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseLeave}
        newDrawingFn={this.newDrawingFn}
        changeColor={this.changeColor}
         />
      </div>
    )
  }
}

