$(document).ready(function () {
  var url = "https://pixabay.com/api/?key=14010091-6fc887d8f179a5dc0fe818556&q=green+vegetable&image_type=photo&pretty=true";
  $.ajax({
    dataType: "json",
    url: url,
    success: function (data) {
      var result = "";
      data.hits.forEach(element => {
        result += `
          <div class="col-6">
            <div class="card  shadow-lg mt-5">
            <div class="card-body">
              <img src="${element.largeImageURL}" class="img-fluid">
            </div>
            <div class="card-footer">
             
              <img src="${element.userImageURL}" width="40px" class="rounded-circle">
              ${element.tags}
              <!-- Button to Open the Modal -->   
              <button type="button" class="btn btn-warning text-white float-right" data-toggle="modal" data-target="#myModal${element.id}">
                 View 
              </button>
                <!-- The Modal -->
                <div class="modal fade" id="myModal${element.id}">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <!-- Modal Header -->
                      <div class="modal-header text-uppercase text-primary">
                        <img src="${element.userImageURL}" width="40px" class="rounded-circle">&nbsp;
                        ${element.user}  
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div> 
                      <!-- Modal body -->
                      <div class="modal-body">
                        <img src="${element.largeImageURL}" class="img-fluid">
                      </div>
                      <!-- Modal footer -->
                      <div class="modal-footer">    
                        <div class="cotainer">
                          <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">
                              <i class="material-icons text-success">thumb_up</i>
                              ${element.likes}
                            </li>
                            <li class="list-group-item">
                              <i class="material-icons text-danger">favorite</i>
                              ${element.favorites}
                            </li>
                            <li class="list-group-item">
                              <i class="material-icons text-primary">visibility</i>
                              ${element.views}
                            </li>
                            <li class="list-group-item">  
                              <i class="material-icons text-warning">comment</i>
                              ${element.comments}
                            </li>  
                          </ul>
                        </div>                         
                      </div>        
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          `;
      });
      $("#card").append(result);
    }
  });
});