import * as React from 'react';

export class App extends React.Component<{}, IState>{

    constructor(props: {}){
        super(props);

        this.state = {
            currentTask: "",
            tasks: []
        }
    }


    public handleSubmit(e: React.FormEvent<HTMLFormElement>):void{
        console.log("i am clicked")
        e.preventDefault()
        this.setState({
            currentTask: "",
            tasks:[
                ...this.state.tasks,
                this.state.currentTask
            ]
        })
    }

    public renderTask(): JSX.Element[]{
        return this.state.tasks.map((task:string, index:number)=>{
            return(
                <div key={index}>{task}</div>
            )
        })
    }

    public render(): JSX.Element{
        console.log(this.state)
        return  (
            <div>
                <h1>React With typeScript</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" placeholder="Add your task" 
                        onChange={(e)=>this.setState({currentTask: e.target.value})}/>
                    <button type="submit">Add Task</button>
                </form>
                <section>{this.renderTask()}</section>
            </div>  
        );
    }
}


interface IState{
    currentTask: string,
    tasks: Array<string>;
}