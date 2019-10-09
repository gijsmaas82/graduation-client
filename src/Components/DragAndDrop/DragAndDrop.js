import React, { Component } from 'react'

import { Stage, Layer, Circle, Image, Path } from 'react-konva';
import useImage from 'use-image';
import './DragAndDrop.css'


export default class DragAndDrop extends Component {
  render() {
    return (
      <div>
        <h1> Drag and Drop </h1>
        {this.props.gameOver ? 'Game over' :
        <div className="stage" >
          <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Circle 
              x={this.props.position.basket.x}
              y={this.props.position.basket.y}
              radius={50}
              fill="#30CE30"
              /> 
              {this.props.droppedApples.map(apple => {
                return <Path
                // className="apple" 
                key={apple}
                x={Math.random() < 0.5 ? this.props.position.basket.x - Math.floor(Math.random()  * 15) : this.props.position.basket.x + Math.floor(Math.random()  * 15)}
                y={Math.random() < 0.5 ? this.props.position.basket.y - Math.floor(Math.random()  * 15) : this.props.position.basket.y + Math.floor(Math.random()  * 15)}
                scaleX={0.5}
                scaleY={0.5}
                shadowBlur={1}
                shadowOpacity={0.6}
                fill="#E91E1E"
                // rotation={Math.random() * 180}
                data="M35.546 42C35.546 50.5 2.54602 58.5 2.54602 39.5C1.37936 36.1667 -0.253975 27.5 2.54602 19.5C5.34602 11.5 14.7127 15.1667 19.046 18L22.546 1L27.546 2.5C25.7127 8.66667 23.946 20.4 31.546 18C41.046 15 35.546 33.5 35.546 42Z" fill-opacity="0.75" stroke="#6C0808"
                
              />
              })}
  
               
              {this.props.position.apples.map(apple => {
                return <Path
                // className="apple" 
                key={apple.id}
                value={apple.id}
                x={apple.x}
                y={apple.y}
                width={100}
                height={100}
                shadowBlur={5}
                shadowOpacity={0.6}
                fill={apple.isDragging ? "green" : "#E91E1E"}
                // rotation={Math.random() * 180}
                data="M35.546 42C35.546 50.5 2.54602 58.5 2.54602 39.5C1.37936 36.1667 -0.253975 27.5 2.54602 19.5C5.34602 11.5 14.7127 15.1667 19.046 18L22.546 1L27.546 2.5C25.7127 8.66667 23.946 20.4 31.546 18C41.046 15 35.546 33.5 35.546 42Z" fill-opacity="0.75" stroke="#6C0808"
                draggable
                onDragStart={this.props.onDragStart}
                onDragEnd={this.props.onDragEnd}
              />
              })}
              
            </Layer>
          </Stage>
          
        </div>}
      </div>
    )
  }
}

{/* <svg width="38" height="52" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style="mix-blend-mode:darken">
<path d="M35.546 42C35.546 50.5 2.54602 58.5 2.54602 39.5C1.37936 36.1667 -0.253975 27.5 2.54602 19.5C5.34602 11.5 14.7127 15.1667 19.046 18L22.546 1L27.546 2.5C25.7127 8.66667 23.946 20.4 31.546 18C41.046 15 35.546 33.5 35.546 42Z" fill="#E91E1E" fill-opacity="0.75"/>
<path d="M35.546 42C35.546 50.5 2.54602 58.5 2.54602 39.5C1.37936 36.1667 -0.253975 27.5 2.54602 19.5C5.34602 11.5 14.7127 15.1667 19.046 18L22.546 1L27.546 2.5C25.7127 8.66667 23.946 20.4 31.546 18C41.046 15 35.546 33.5 35.546 42Z" stroke="#6C0808"/>
</g>
</svg> */}


