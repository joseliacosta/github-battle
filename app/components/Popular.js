import React from "react";

const LanguagesNav = ({ selected, onUpdateLanguage }) => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="flex-center">
      {languages.map(language => (
        <li
          key={language}
          style={language === selected ? { color: "red" } : null}
        >
          <button
            className="btn-clear nav-link"
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    });
  }

  render() {
    const { selectedLanguage } = this.state;

    return (
      <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={this.updateLanguage}
      />
    );
  }
}
