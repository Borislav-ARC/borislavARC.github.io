$(function() {

    //    Model
    var Link = Backbone.Model.extend({});

    //    Colletion
    var LinksCollection = Backbone.Collection.extend({
        model: Link,

        initialize: function() {
            this.initEvents();
        },

        initEvents: function() {
            this.on('add', this.linksAdd)
        },

        linksAdd: function( model ){
            var view = new LinkView({
                model: model
            });
            view.render();
            $('#list').append(view.$el);
        }
    });

    //    View
    var LinkView = Backbone.View.extend({
        render: function () {
            var taskTemplate = _.template($("#template__link").text());
            var data = this.model.toJSON();
            this.setElement(taskTemplate(data));
        }
    });

    //    Main App
    var App = {
        links: new LinksCollection,
        number: 1,
        url: 'http://rutube.ru/api/video/person/350/?format=jsonp',

        init: function() {
            this.getData();
            this.initEvents();
        },

        initEvents: function() {
            var self = this;
            $('#button-more').on('click', function() {
                self.getData();
            })
        },

        getData: function() {
            var self = this;
            $.ajax({
                type: "GET",
                url: self.url,
                dataType: "jsonp",

                success: function(data) {
                    var respond = data.results;
                    var linksData;

                    for (var i = 0; i < respond.length; i++) {
                        linksData = new Link({
                            number: self.number++,
                            link: respond[i].source_url,
                            category: respond[i].category.name
                        });
                        self.links.add(linksData)
                    }

                    if (!data.has_next) {
                        $('#button-more').hide()
                    } else {
                        self.url = data.next;
                    }
                }
            });
        }
    };

    App.init()
});