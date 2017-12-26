const expect = require('expect'); //expect is a module used to create assertions. assertions are test cases that help us simplify the process of writing complicated if else blocks to test code
const request = require('supertest'); //request by supertest is used to help us easy made http requests so that we can test the code.
const {ObjectID} = require('mongodb');

const {app} = require('./../server.js'); //we require app from the server.js file
const {Todo} = require('./../models/Todos.js'); //we require the Todo object from the Todos.js file | it cointains a mongoose model that is used to add things to the database.

/*****************************************************************************************************
*Before each is code that will execute asynchronoously before allowing the code to continue
*In this case, we are clearing the todos from the db before running the test case to make sure we can properly test
*the number of items in the collection.
*****************************************************************************************************/
const todos = [{
    _id: new ObjectID,
    text:"First test todo"
}, {
    _id: new ObjectID,
    text:"Second test todo"
}];
beforeEach( (done) => { 
    Todo.remove({}).then( () => {
        return Todo.insertMany(todos);
    }).then( () => done());
});

/*****************************************************************************************************
*Writes a describe block that contains our mocha and express test cases.
*****************************************************************************************************/
describe("POST /todos", () => {

    /*******************************************
    *This test case checks that the entry has been added to the DB
    *******************************************/
    it("should create a new todo", (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos') //specifies the request type
            .send({text}) //sends the request body
            .expect(200) //asserts that we want a 200 status code
            .expect( (res) => { //asserts that we want the response body to be equal to the post body we made
                expect(res.body.text).toBe(text);
            })
            .end( (err,res) => { //before we end, we check that the response was actually added to the DB
                if (err) return done(err);
                
                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch( (e) => done(e));
            });
       
    });

    /*******************************************
    *This test case checks that the entry has NOT been added to the DB
    *******************************************/
    it('should not create todo with invalid body data', (done) => {

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end( (err,res) => {
                if(err) return done(err);
                Todo.find().then( (todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch( (e) => {done( e)});
            });

    });

});

/*****************************************************************************************************
*Describe block for the GET request test on todos route
*****************************************************************************************************/
describe('GET /todos', () => {

    it('should get all the todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect( (res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });

});

/*****************************************************************************************************
*Describe block for the GET request test on todos/id route
*****************************************************************************************************/
describe('GET /todos/:id', () => {

    it('should return a todo doc', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect( (res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return 404 if todo not found', (done) => {
        request(app)
            .get("/todos/5a4194ded1495c3608d06158")
            .expect(404)
            .end(done);
    });

    it('should return 404 for non-object IDs', (done) => {
        request(app)
            .get("/todos/123")
            .expect(404)
            .end(done);
    });

});