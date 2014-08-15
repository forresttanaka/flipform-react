/** @jsx React.DOM */
React = require('React');
$ = require('jquery');
_ = require('underscore');


var SearchForm = React.createClass({
    getInitialState: function() {
        return {
            term1: '',
            term2: '',
            term3: '',
            term4: '',
            term5: '',
            term6: ''
        };
    },

    handleChange: function(e) {
        var obj = {};
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    },

    render: function() {
        var query = '/' + _.compact(this.state).map(function(term) {
            return term.replace(/ /g, "+");
        }).join('&');

        return (
            <form role="form">
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label for="searchTerm1">Search term 1</label>
                        <input type="text" className="form-control" name="term1" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label for="searchTerm2">Search term 2</label>
                        <input type="text" className="form-control" name="term2" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label for="searchTerm3">Search term 3</label>
                        <input type="text" className="form-control" name="term3" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label for="searchTerm4">Search term 4</label>
                        <input type="text" className="form-control" name="term4" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label for="searchTerm5">Search term 5</label>
                        <input type="text" className="form-control" name="term5" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label for="searchTerm6">Search term 6</label>
                        <input type="text" className="form-control" name="term6" onChange={this.handleChange} />
                    </div>
                </div>
                <a className="btn btn-primary" href={query}>Submit</a>
            </form>
        );
    }
});

React.renderComponent(
    <SearchForm />,
    document.getElementById('form')
);
