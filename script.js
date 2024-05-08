

function AddInfoItem(parentDiv) {
    // Create a new input field
    var inputField = document.createElement("input");
    inputField.type = "text";

    // Create a new label element
    var label = document.createElement("label");
    label.innerHTML = "Item Info Name:";

    var lineBreak = document.createElement("br");

    // var deleteButton = document.createElement("button");
    var buttonIcon = document.createElement("i");
    buttonIcon.className = "fas fa-trash";
    buttonIcon.onclick = function () {
        this.parentNode.remove();
    }


    // Append the input field and label to a new container element
    var container = document.createElement("div");
    container.className = "info-item";
    container.appendChild(lineBreak);
    container.appendChild(label);
    container.appendChild(inputField);
    container.appendChild(buttonIcon);

    // Add the container element to the parent element
    parentDiv.appendChild(container);

    // Add event listener for double-click on the label
    label.addEventListener("dblclick", function () {
        // Make the label editable
        label.contentEditable = true;
    });
}

function AddGroupItem() {
    var groupItem = document.createElement("div");
    groupItem.className = "group-item offset-md-3 col-md-6";

    var groupHeader = document.createElement("div");
    groupHeader.className = "header";

    var groupTitle = document.createElement("span");
    groupTitle.className = "group-title";
    groupTitle.innerHTML = "Group Item_20215408";

    var buttonGroup = document.createElement("span");
    buttonGroup.className = "button-group";

    var addInfoButton = document.createElement("button");
    addInfoButton.onclick = function () {
        AddInfoItem(this.parentNode.parentNode.parentNode);
    }
    addInfoButton.innerHTML = "Add Info Item";
    addInfoButton.id = "add-info-button";

    var addGroupButton = document.createElement("button");
    addGroupButton.innerHTML = "Add Group Item";
    addGroupButton.onclick = AddGroupItem;
    addGroupButton.id = "add-info-button";

    var deleteGroupButton = document.createElement("i");
    deleteGroupButton.className = "fas fa-trash";
    deleteGroupButton.onclick = function () {
        var confimartion = confirm("Nguyễn Trung Kiên 20215408")
        if (confimartion) {
            groupItem.remove();
        }
    }

    var lineBreak = document.createElement("br");

    buttonGroup.appendChild(addInfoButton);
    buttonGroup.appendChild(addGroupButton);
    buttonGroup.appendChild(deleteGroupButton);
    groupHeader.appendChild(groupTitle);
    groupHeader.appendChild(buttonGroup);
    groupItem.appendChild(groupHeader);
    document.body.appendChild(lineBreak);
    document.body.appendChild(lineBreak);
    document.body.appendChild(groupItem);

    groupTitle.ondblclick = function () {
        groupTitle.contentEditable = true;
    }

    groupTitle.onblur = function () {
        groupTitle.contentEditable = false;
        groupTitle.innerHTML = groupTitle.innerHTML + "_20215408";
    };
}



