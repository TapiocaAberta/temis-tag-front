        (function () {
          var app = new Vue({
            el: '#app',
            data: {
              laws: [{
                _id: '111',
                text: 'Learn JavaScript'
              }, {
                _id: '222',
                text: 'Learn Vue'
              }, {
                _id: '333',
                text: 'Build something awesome'
              }]
            },
            methods: {
              reverseMessage: function (id, tag) {
                console.log('=============================')
                console.log(id, tag)
                console.log('=============================')

                // axios.post('/laws', JSON.parse(data))
                //     .then(function(res) {
                //         output.className = 'container';
                //         output.innerHTML = res.data;
                //     })
                //     .catch(function(err) {
                //         output.className = 'container text-danger';
                //         output.innerHTML = err.message;
                //     });
              }
            }
          })
        })()
