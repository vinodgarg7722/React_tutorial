function AddTodo() {

    return (
        <div className="container">
  <div className="row kg-row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here" />
    </div>
    <div className="col-4">
      <input type="date" />
    </div>
    <div className="col-2 d-flex justify-content-center align-items-center">
      <button type="button" className="btn btn-success kg-button">Add</button>
    </div>
  </div>
</div>

    );


}

export default AddTodo;