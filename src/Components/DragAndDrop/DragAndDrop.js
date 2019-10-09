import React, { Component } from 'react'

import { Stage, Layer, Circle, Image, Path } from 'react-konva';
import useImage from 'use-image';
import './DragAndDrop.css'


export default class DragAndDrop extends Component {
  render() {
    return (
      <div className="dragAndDropWrapper">
        <h1> Apple Picking </h1>
        {this.props.gameOver ? 'Game over' :
        <div className="stage">
          <Stage  width={900} height={500}>
            <Layer>
              <Path 
              x={this.props.position.basket.x}
              y={this.props.position.basket.y}
              data="M1.66541 17.5C5.22465 25.7644 44.3992 26.9187 71.5 26C75.5814 23.6154 79.3776 20.5974 81.1868 17.5M1.66541 17.5C0.0588668 13.7697 5.70853 8.59075 23 1.5C76.9289 0.630183 85.9529 9.34033 81.1868 17.5M1.66541 17.5C13.1331 58.7 18.6667 69 20 69C29 73.5 51 79.8 67 69C87 55.5 71.3735 40.5 81.1868 17.5" stroke="black"
              fill="#30CE30"
              stroke="black"
              shadowBlur={1}
              /> 
              {this.props.droppedApples.map(apple => {
                return <Path
                // className="apple" 
                key={apple}
                x={this.props.position.basket.x + Math.floor(Math.random()  * 40 + 10)}
                y={this.props.position.basket.y + Math.floor(Math.random()  * 30 + 10)}
                scaleX={0.5}
                scaleY={0.5}
                shadowBlur={1}
                shadowOpacity={0.6}
                fill="#E91E1E"
                fill-opacity="0.75"
                stroke="black"
                // rotation={Math.random() * 180}
                data="M23.5 16.5L27 11.5L32 13C26.6667 20.6667 18.2 34.3 27 27.5C35.8 20.7 43.3333 24.6667 46 27.5C47 38.8333 46.4 61.1 36 59.5C23 57.5 22.5 58 13.5 59.5C4.5 61 -3 33 3.5 27.5C8.7 23.1 16.3333 25.6667 19.5 27.5L23.5 16.5ZM23.5 16.5L20 14M20 14C21.5 11.5 21.9 5.6 11.5 2C1.1 -1.6 8.5 8.5 13.5 14H20Z" stroke="black"
                
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
                fill-opacity="0.75"
                stroke="black"
                // rotation={Math.random() * 180}
                data="M23.5 16.5L27 11.5L32 13C26.6667 20.6667 18.2 34.3 27 27.5C35.8 20.7 43.3333 24.6667 46 27.5C47 38.8333 46.4 61.1 36 59.5C23 57.5 22.5 58 13.5 59.5C4.5 61 -3 33 3.5 27.5C8.7 23.1 16.3333 25.6667 19.5 27.5L23.5 16.5ZM23.5 16.5L20 14M20 14C21.5 11.5 21.9 5.6 11.5 2C1.1 -1.6 8.5 8.5 13.5 14H20Z" stroke="black"
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

{/* <svg width="47" height="61" viewBox="0 0 47 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5 16.5L27 11.5L32 13C26.6667 20.6667 18.2 34.3 27 27.5C35.8 20.7 43.3333 24.6667 46 27.5C47 38.8333 46.4 61.1 36 59.5C23 57.5 22.5 58 13.5 59.5C4.5 61 -3 33 3.5 27.5C8.7 23.1 16.3333 25.6667 19.5 27.5L23.5 16.5ZM23.5 16.5L20 14M20 14C21.5 11.5 21.9 5.6 11.5 2C1.1 -1.6 8.5 8.5 13.5 14H20Z" stroke="black"/>
</svg> */}


{/* <svg width="83" height="76" viewBox="0 0 83 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66541 17.5C5.22465 25.7644 44.3992 26.9187 71.5 26C75.5814 23.6154 79.3776 20.5974 81.1868 17.5M1.66541 17.5C0.0588668 13.7697 5.70853 8.59075 23 1.5C76.9289 0.630183 85.9529 9.34033 81.1868 17.5M1.66541 17.5C13.1331 58.7 18.6667 69 20 69C29 73.5 51 79.8 67 69C87 55.5 71.3735 40.5 81.1868 17.5" stroke="black"/>
</svg> */}


{/* <svg width="38" height="52" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style="mix-blend-mode:darken">
<path d="M35.546 42C35.546 50.5 2.54602 58.5 2.54602 39.5C1.37936 36.1667 -0.253975 27.5 2.54602 19.5C5.34602 11.5 14.7127 15.1667 19.046 18L22.546 1L27.546 2.5C25.7127 8.66667 23.946 20.4 31.546 18C41.046 15 35.546 33.5 35.546 42Z" fill="#E91E1E" fill-opacity="0.75"/>
<path d="M35.546 42C35.546 50.5 2.54602 58.5 2.54602 39.5C1.37936 36.1667 -0.253975 27.5 2.54602 19.5C5.34602 11.5 14.7127 15.1667 19.046 18L22.546 1L27.546 2.5C25.7127 8.66667 23.946 20.4 31.546 18C41.046 15 35.546 33.5 35.546 42Z" stroke="#6C0808"/>
</g>
</svg> */}


