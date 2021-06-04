
var AnhNhat = React.createClass({
    render: function () {
      return(
      <div>
      <h1 className = "mauvang">{this.props.ten}-{this.props.giangvien} </h1>
      </div>
    )
    }
});

ReactDOM.render(
  <div>
      <AnhNhat ten= "ReactJS" giangvien="Mr.Nhật"/>
      <AnhNhat ten= "NodeJS" giangvien="Mr.Thư"/>
  </div>
  ,document.getElementById("root"));
