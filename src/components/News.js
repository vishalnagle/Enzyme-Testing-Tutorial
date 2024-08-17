import React from "react";


export default class News extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            newsCount: 0,
        }

    }

    componentDidMount() {
        this.func(90, 80)

    }

     func = async (n1, n2) => {
        let url = `http://localhost/api/article-list`;
        let options = {
            method: "GET"
        };
    
        try {
            let response = await fetch(url, options);
            let data = await response?.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error; 
        }
    };
    

    signOut = () => {
        this.func(90, 80)
    }

    checkBoxChecked = (id, test) => {
        return {
            id: 3
        }
    }

    loadData = (id, test) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setState({
                    newsCount: 50
                })

                resolve({
                    me: 12
                })
            }, 2000)
        })
    }

    render() {
        return <>
            <button onClick={() => this.signOut}>
                Sign Out
            </button>
            <input type="text" id="firstname" value="codeimprove" name="firstname" />
        </>
    }
}