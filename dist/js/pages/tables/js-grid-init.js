! function(document, window, $) {
    "use strict";
    var Site = window.Site;
     jsGrid.setDefaults({
            tableClass: "jsgrid-table table table-striped table-hover"
        }), jsGrid.setDefaults("text", {
            _createTextBox: function() {
                return $("<input>").attr("type", "text").attr("class", "form-control input-sm")
            }
        }), jsGrid.setDefaults("number", {
            _createTextBox: function() {
                return $("<input>").attr("type", "number").attr("class", "form-control input-sm")
            }
        }), jsGrid.setDefaults("textarea", {
            _createTextBox: function() {
                return $("<input>").attr("type", "textarea").attr("class", "form-control")
            }
        }), jsGrid.setDefaults("control", {
            _createGridButton: function(cls, tooltip, clickHandler) {
                var grid = this._grid;
                return $("<button>").addClass(this.buttonClass).addClass(cls).attr({
                    type: "button",
                    title: tooltip
                }).on("click", function(e) {
                    clickHandler(grid, e)
                })
            }
        }), jsGrid.setDefaults("select", {
            _createSelect: function() {
                var $result = $("<select>").attr("class", "form-control input-sm"),
                    valueField = this.valueField,
                    textField = this.textField,
                    selectedIndex = this.selectedIndex;
                return $.each(this.items, function(index, item) {
                    var value = valueField ? item[valueField] : index,
                        text = textField ? item[textField] : item,
                        $option = $("<option>").attr("value", value).text(text).appendTo($result);
                    $option.prop("selected", selectedIndex === index)
                }), $result
            }
        }),
        
            // Basic grid
            $("#basicgrid").jsGrid({
                height: "750px",
                width: "100%",
                filtering: true,
                editing: true,
                sorting: true,
                paging: true,
                autoload: true,
                pageSize: 9,
                pageButtonCount: 5,
                deleteConfirm: "Do you really want to delete the client?",
                controller: db,
                fields: [
                    { name: "Name", type: "text", width: 150 },
                    { name: "Age", type: "number", width: 50 },
                    { name: "Address", type: "text", width: 200 },
                    { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                    { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                    { type: "control" }
                ]
            });
        
         // Static Grid
        
            $("#staticgrid").jsGrid({
                height: "90%",
                width: "100%",
                sorting: true,
                paging: true,
                pageSize: 9,
                data: db.clients,
                fields: [
                    { name: "Name", type: "text", width: 150 },
                    { name: "Age", type: "number", width: 50 },
                    { name: "Address", type: "text", width: 200 },
                    { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                    { name: "Married", type: "checkbox", title: "Is Married" }
                ]
            });
        
         // O data
         
            $("#odata").jsGrid({
                height: "auto",
                width: "100%",
                sorting: true,
                paging: false,
                autoload: true,
                controller: {
                    loadData: function() {
                        var d = $.Deferred();

                        $.ajax({
                            url: "http://services.odata.org/V3/(S(3mnweai3qldmghnzfshavfok))/OData/OData.svc/Products",
                            dataType: "json"
                        }).done(function(response) {
                            d.resolve(response.value);
                        });

                        return d.promise();
                    }
                },

                fields: [
                    { name: "Name", type: "text" },
                    { name: "Description", type: "textarea", width: 150 },
                    { name: "Rating", type: "number", width: 50, align: "center",
                        itemTemplate: function(value) {
                            return $("<div>").addClass("rating").append(Array(value + 1).join("&#9733;"));
                        }
                    },
                    { name: "Price", type: "number", width: 50,
                        itemTemplate: function(value) {
                            return value.toFixed(2) + "$"; }
                    }
                ]
            
            });
        
        // Sorting
         
         $("#sorting").jsGrid({
            height: "500px",
            width: "100%",

            autoload: true,
            selecting: false,

            controller: db,

            fields: [
                    { name: "Name", type: "text", width: 150 },
                    { name: "Age", type: "number", width: 50 },
                    { name: "Address", type: "text", width: 200 },
                    { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                    { name: "Married", type: "checkbox", title: "Is Married" }
                ]
            });


            $("#sort").click(function() {
                var field = $("#sortingField").val();
                $("#sorting").jsGrid("sort", field);
            });
         
        // Validation
        $("#validation").jsGrid({
        width: "100%",
        filtering: !0,
        editing: !0,
        inserting: !0,
        sorting: !0,
        paging: !0,
        autoload: !0,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: db,
        fields: [{
            name: "Name",
            type: "text",
            width: 150,
            validate: "required"
        }, {
            name: "Age",
            type: "number",
            width: 50,
            validate: {
                validator: "range",
                param: [18, 80]
            }
        }, {
            name: "Address",
            type: "text",
            width: 200,
            validate: {
                validator: "rangeLength",
                param: [10, 250]
            }
        }, {
            name: "Country",
            type: "select",
            items: db.countries,
            valueField: "Id",
            textField: "Name",
            validate: {
                message: "Country should be specified",
                validator: function(e) {
                    return e > 0
                }
            }
        }, {
            name: "Married",
            type: "checkbox",
            title: "Is Married",
            sorting: !1
        }, {
            type: "control"
        }]
    })
         
}(document, window, jQuery);