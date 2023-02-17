import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000,
  };

  state = {
    valuesIndex: 0,
    loop_count: 0,
    scroll_value: 0,
    top: 0,
    bottom: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }
  listenToScroll = () => {
    const componentTop = document.getElementById("roadmap").offsetTop;
    const componentBottom =
      componentTop + document.getElementById("roadmap").clientHeight;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll;

    this.setState({
      scroll_value: scrolled,
      top: componentTop,
      bottom: componentBottom,
    });
    if ((this.state.top-100 <= this.state.scroll_value) &&( this.state.scroll_value<= this.state.bottom-30) ){
      if (this.state.loop_count === 0) {
        this.setState({
          valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
        });
      }
      this.setState({
        loop_count : 1
      })

    }
    else{
      this.setState({
        loop_count : 0
      })
    }
  };

  render() {
    if (this.state.loop_count === 0) {
      return this.props.children(this.props.values[this.state.valuesIndex]);
    }
    return this.props.children(this.props.values[1]);
  }
}

export default ChangingProgressProvider;
