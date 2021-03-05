<div class="position-relative">
    <div class="shape overflow-hidden text-white">
        <svg viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" fill="currentColor"></path>
        </svg>
    </div>
</div>
<section class="section ">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-7 col-12">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-4 pb-2">
                        <div class="card blog-post border-0 shadow rounded overflow-hidden">
                            <div class="card-body p-4 content">
                                <h1 class="font-weight-bold text-dark">Jpg to Pdf</h1>
                                <p class="text-muted mb-3">This is required when, for example, the final text is not yet available.</p>
                                
                                <div class="custom-file-container" data-upload-id="myUniqueUploadId">
                                    <label>Upload File
                                        <a href="javascript:void(0)" class="btn btn-outline-danger btn-sm custom-file-container__image-clear"
                                            title="Clear Image"
                                            >Clear All</a>
                                    </label>
                                    

                                    <label class="custom-file-container__custom-file">
                                        <input
                                            type="file"
                                            class="custom-file-container__custom-file__custom-file-input"
                                            accept="image/*"
                                            multiple
                                            aria-label="Choose File"
                                        />
                                        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                        <span
                                            class="custom-file-container__custom-file__custom-file-control"
                                        ></span>
                                    </label>
                                    <div class="custom-file-container__image-preview"></div>
                                </div>
                                    <ul class="list-unstyled post-meta d-flex justify-content-between mb-0 pt-3 border-top">
                                    <li>
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="like text-dark"><i data-feather="heart" class="fea icon-sm"></i> 34</a></li>
                                            <li class="list-inline-item ml-2"><a href="javascript:void(0)" class="comment text-dark"><i data-feather="message-circle" class="fea icon-sm"></i> 08</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)" class="read-more text-dark">Read More <i class="mdi mdi-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="sidebar component-wrapper mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="widget mb-4 pb-2">
                        <h4 class="widget-title">Catagories</h4>
                        <div class="p-4 mt-4 rounded shadow">
                            <ul class="list-unstyled mb-0 catagory">
                                <li><a href="jvascript:void(0)">Cloud Hosting</a> <span class="float-right">13</span></li>
                                <li><a href="jvascript:void(0)">Email Server</a> <span class="float-right">09</span></li>
                                <li><a href="jvascript:void(0)">Wordpress Server</a> <span class="float-right">18</span></li>
                                <li><a href="jvascript:void(0)">Web Hosting</a> <span class="float-right">20</span></li>
                                <li><a href="jvascript:void(0)">Reseller Hosting</a> <span class="float-right">22</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@section('javascript')
<script>

    // $(document).ready(function(){
        
    //    // var upload = new FileUploadWithPreview.default('myUniqueUploadId');
    //     // var reader = new FileReader();
    //     // const doc = new PDFDocument();
    //    // const doc = new PDFDocument();
 
    //     // pipe the document to a blob
    //     // const stream = doc.pipe(blobStream());
    //     var navigator_info = window.navigator;
    //     var screen_info = window.screen;
    //     var uid = navigator_info.mimeTypes.length;
    //     console.log(navigator_info.userAgent.replace(/\D+/g, ''))
    //     console.log(navigator_info.plugins.length)
    //     console.log(screen_info.height || '')
    //     console.log(screen_info.width || '')
    //     console.log(screen_info.pixelDepth || '')
    //     console.log(navigator_info)
    //     //uid += navigator_info.userAgent.replace(/\D+/g, '');
    //     // uid += navigator_info.plugins.length;
    //     // uid += screen_info.height || '';
    //     // uid += screen_info.width || '';
    //     // uid += screen_info.pixelDepth || '';
    //     // console.log(uid);
    //     // document.write(uid);

    //     //console.log(uuid)
    //     // window.addEventListener("fileUploadWithPreview:imagesAdded", function (e) {
    //     //     if (e.detail.uploadId === "myUniqueUploadId") {
    //     //         reader.onload = function(e) {
    //     //             doc.pipe(fs.createWriteStream('output.pdf'));

    //     //             console.log(e.target.result);

    //     //         }
    //     //         reader.readAsDataURL(e.detail.cachedFileArray[upload.currentFileCount-1])
    //     //     }
    //     // });
    // });
    
</script>
@endsection
