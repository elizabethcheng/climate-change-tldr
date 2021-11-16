'use strict';

const {DragDropContext, Draggable, Droppable } = window.ReactBeautifulDnd;
const ReactDOM = window.ReactDOM;

/*
props: {
  className: string,
  inputsContainerClassName: string;
  numInputs: number;
  questionText: string;
  renderInput: (numInput: number, isSelected: boolean) => ReactElement;
  renderAnswer: (numInput: number) => ReactElement;
}
*/

// fake data generator
/*const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));
*/


class DragQuestion extends React.Component {
  static grid = 8;

  static getItems = () => {
    const answerTexts = [
      "Air dry clothes",
      "Use LED light bulbs",
      "Reduce heating and AC use",
      "Properly dispose of old refrigerators",
    ];

    return answerTexts.map((text, index) => ({
      id: `item-${index}`,
      content: `${text}`
    }));
  }

  // a little function to help us with reordering the result
  static reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  static getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: DragQuestion.grid * 2,
    margin: `0 0 ${DragQuestion.grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
  });


  static getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: DragQuestion.grid,
    width: 250
  });

  constructor(props) {
    super(props);
    this.state = {
      items: DragQuestion.getItems()
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd (result) {
    // dropped outside the list
    if(!result.destination) {
       return; 
    }
    
    const items = DragQuestion.reorder(
      this.state.items, 
      result.source.index, 
      result.destination.index
    );
    
    this.setState({
      items
    });
  }

  render() {
    return e(DragDropContext, { 
        onDragEnd: this.onDragEnd
      },
        e(Droppable, {
          droppableId: "droppable"
        },
          (provided, snapshot) => e('div', {
            ...provided.droppableProps,
            ref: provided.innerRef,
            style: DragQuestion.getListStyle(snapshot.isDraggingOver),
          },
            [
              ...this.state.items.map((item, index) => (
                  e(Draggable, { 
                    key: item.id, 
                    draggableId: item.id,
                    index,
                  },
                  (provided, snapshot) => 
                    e('div', 
                      {
                        ref: provided.innerRef,
                        ...provided.draggableProps,
                        ...provided.dragHandleProps,
                        style: DragQuestion.getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        ),
                      },
                      item.content
                    )
                  )
              )),
              provided.placeholder,
            ]
          )
        )
    );
  }
}
