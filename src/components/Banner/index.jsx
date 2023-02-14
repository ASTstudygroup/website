import React, { Component } from "react";
import { nanoid } from "nanoid"
import TrackVisibility from 'react-on-screen';
import "./index.css";

export default class Banner extends Component {
  state = {
    loopNum: 0, // The index of looping, ex: 1, 2, 3
    isDeleting: false, // Check the text is delete or not
    text: '', // 
    textColor: "",//
    delta: 100,
    index: 1,
  }

  text2Color = {
    "p": "rgb(160, 91, 135)",
    "b": "rgb(74, 133, 201)",
    "y": "#F9C653",
    "w": "rgb(206, 209, 216)",
    "g": "rgb(106, 192, 153)",
    "c": "rgb(130, 87, 68)",
    "o": "rgb(228, 213, 182)"
  }

  componentDidMount() {
    this.ticker = setInterval(() => {
      this.tick();
    }, this.state.delta);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }

// root.render(<HelloMessage name="Taylor" />);
  tick = () => {
    const { loopNum, isDeleting, text, textColor, delta, index } = this.state;

    const toRotate = [

      { "text": 'import React, { Component } from "react";~~export default class Timer extends Component {~  render() {~    return <div>Hello {this.props.name}</div>;~  }~};', "color": "pppppp bbbbbw y bbbbbbbbb y pppp cccccccw~~pppppp ppppppp bbbbb ggggg bbbbbbb ggggggggg y~  oooooopp b~    pppppp wbbbwwwwww pbbbbwbbbbbwbbbbpwwbbbww~  b~y" },

    ];
    const period = 2000;

    // Determine the current string to display
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i].text;
    let fullTextColor = toRotate[i].color;

    // Determine the updated text based on if it's deleting or not
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    let updatedTextColor = isDeleting ? fullTextColor.substring(0, text.length - 1) : fullTextColor.substring(0, text.length + 1);

    // Update the text state with the new text
    this.setState({ text: updatedText });
    this.setState({ textColor: updatedTextColor })

    // If it's deleting, slow down the deleting speed
    if (isDeleting) {
      this.setState(prevState => ({ delta: prevState.delta / 2 }));
    }

    // If it's not deleting and the text is equal to the full text, start deleting
    if (!isDeleting && updatedText === fullText) {
      this.setState({ isDeleting: true });
      this.setState(prevState => ({ index: prevState.index - 1 }));
      this.setState({ delta: period });

      // If it's deleting and the text is empty, reset for next loop
    } else if (isDeleting && updatedText === '') {
      this.setState({ isDeleting: false });
      this.setState(prevState => ({ loopNum: prevState.loopNum + 1 }));
      this.setState({ index: 1 });
      this.setState({ delta: 500 });

      // If it's not deleting and not empty, increase index
    } else {
      this.setState(prevState => ({ index: prevState.index + 1 }));
    }
  }


  render() {
    const { text, textColor } = this.state;
    return (
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="txt-rotate" >
                      <span className="wrap">
                      {
                        Array.from(text).map((t, idx) => {
                          let bool = (t != "~");
                          let space = (t == " " ? "9px" : "");
                          return bool ? <span key={nanoid()} style={{ paddingLeft: space, color: this.text2Color[textColor[idx]] }}>{t}</span> : <br key={nanoid()}/>
                        })
                      }
                      </span>
                      </span>
                  </div>}
              </TrackVisibility>
    )
  }
}