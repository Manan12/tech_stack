import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager } from 'react-native';
import { CardSection, Card } from './common';
import { connect } from 'react-redux';
// * means select all from index.js file(in action folder)
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }


  renderDescription() {
    const { library, expanded } = this.props;

    if(expanded) {
      return (
        <Card>
        <CardSection>
          <Text style={{ flex: 1, paddingLeft: 15, paddingRight: 15, color: '#FF0000' }}>
            {library.description}
          </Text>
        </CardSection>
        </Card>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(id)}
      >
        <View>

          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    flexDirection:'column',
    alignItems:'center',
    fontSize: 18,
    marginTop: 20,
    paddingLeft: 20
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
