<li v-bind:class="[item.journal ? 'journal' : [item.conf ? 'conf' : 'incoming']]" class="list-group-item">
  <b class="title">{{item.title}}</b></br>
  <span class="">{{item.authors}}</span>
    <span v-if="item.journal" class="text-primary">{{item.journal}}.
      <span v-if="item.conf" class="text-primary small">Extended abstract in {{item.conf}}.</span>
    </span>
    <span v-else-if="item.conf" class="text-primary">{{item.conf}}.
      <span v-if="item.comment" class="text-primary">{{item.comment}}.</span>
    </span>
    <span v-else-if="item.comment" class="text-primary">{{item.comment}}.</span>
    <a v-if="item.openacess" v-bind:href="item.openacess" class="badge bg-dark">
      Open access
    </a>
    <a v-if="item.pdf" v-bind:href="item.pdf" class="badge bg-danger">
    Pdf</a>
    <a class="badge bg-success" data-bs-toggle="modal" v-bind:data-bs-target="'#modal'+item.id" >
    More</a>
</li>


<div class="modal fade" v-bind:id="'modal'+item.id" role="dialog">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title m-0">{{item.title}}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="author col-12"><h5 class="m-0">{{item.authors}}</h5></div>
            <div class="text-primary col-12">
              <span class="small">
                <span v-if="item.journal" class="text-primary">{{item.journal}}.
                  <span v-if="item.conf" class="text-secondary">{{item.conf}}.</span>
                </span>
                <span v-else-if="item.conf" class="conf text-primary">{{item.conf}}.
                  <span v-if="item.comment" class="text-secondary ">{{item.comment}}.</span>
                </span>
                <span v-else class="conf text-secondary">{{item.comment}}.</span>
              </span>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12  text-justify">
              <div class="container">
                <span v-html="item.abstract"></span>
              </div>
            </div>
            <div v-if="item.presentations.length" class="col-12 pt-3">
              <h5>Presented in:</h5>
            </div>
            <div class="col-12">
              <ul v-for="presentation in item.presentations" class="presentations">
                <li>{{presentation.place}}.
                  <a v-if="presentation.slides" v-bind:href="presentation.slides"> (slides)</a>
                  <a v-if="presentation.video" v-bind:href="presentation.video"> (video)</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <ul class="nav nav-pills nav-fill">
            <li v-if="item.openacess" class="nav-item">
              <a v-bind:href="item.openacess" class="btn btn-outline-primary" role="button">
                <img class="" height="32px" alt="" src="./img/oa.png" /></a>
            </li>
            <li v-if="item.pdf" class="nav-item">
              <a v-bind:href="item.pdf" class="btn btn-outline-primary" role="button"><span class="far fa-2x fa-file-pdf"></span></a>
            </li>
            <li v-if="item.bibtex" class="nav-item">
              <a v-bind:href="item.bibtex" class="btn btn-outline-primary" role="button">Bibtex</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
