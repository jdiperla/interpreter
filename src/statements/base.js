import PrintSatement from './print';

export default class StatementManager{
    constructor (){
        this.builtin_statements = {
            'PRINT': new PrintSatement()
        }
        this.statement_dict = this.builtin_statements;
    }

    clear(){
        this.statement_dict = this.builtin_statements
    }

    get(name){
        return this.statement_dict[name];
    }

    remove(name){
        delete this.statement_dict[name];
    }

    register(name, statement){
        this.statement_dict[name] = statement;
    }
}