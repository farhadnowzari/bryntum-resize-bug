
export default {
    allowOverlap: false,
    barMargin: 5,
    autoHeight: true,
    multiEventSelect: false,
    features: {
        cellEdit: false,
        headerContextMenu: false,
        eventContextMenu: {
            processItems({eventRecord}) {
                if(!eventRecord.editable) {
                    return false;
                }
            },
            items: {
                deleteEvent: false
            }
        },
        /*
        sort: {
            field: 'availability',
            ascending: false
        }*/
    },
    columns :  [
        {
            text : "Rooms", 
            field : 'name', 
            htmlEncode: false, 
            width: 250, 
            enableCellContextMenu: false,
            renderer(record) {
                var availability = record.record.availability;
                var cellContent = document.createElement('div');
                var icon = null;
                if(availability) {
                    icon = document.createElement('i');
                    icon.classList.add('fa', 'fa-circle', 'green--text');
                } else if(availability !== null && !availability ) {
                    icon = document.createElement('i');
                    icon.classList.add('fa', 'fa-circle', 'red--text');
                }

                var cellLabel = document.createElement('span');
                cellLabel.innerText = record.value;
                cellLabel.classList.add("text-subtitle1");
                var cellInfo = document.createElement('span');
                cellInfo.classList.add('grey--text', 'text-caption')
                cellInfo.innerHTML = `<i class='picon-externe'></i> ${ record.record.capacity }`;

                var cellInfoItemExchange = null;
                if(record.record.source) {
                    cellInfoItemExchange = document.createElement('span');
                    cellInfoItemExchange.classList.add('blue--text', 'text-caption', 'ml-2');
                    cellInfoItemExchange.innerHTML = `Exchange`;
                }

                if(!icon) {
                    cellContent.classList.add('d-flex', 'flex-column');
                    cellContent.appendChild(cellLabel);
                    cellContent.appendChild(cellInfo);
                    return cellContent.outerHTML;
                } else {
                    cellContent.classList.add('d-flex', 'align-items-center', 'pl-2');
                    cellContent.appendChild(icon);
                    var contentInfo = document.createElement('div');
                    contentInfo.classList.add('d-flex', 'flex-column', 'ml-3');
                    contentInfo.appendChild(cellLabel);
                    var contentCaption = document.createElement('div');
                    contentCaption.classList.add('d-flex', 'flex-row');
                    contentCaption.appendChild(cellInfo);
                    if(cellInfoItemExchange) {
                        contentCaption.appendChild(cellInfoItemExchange)
                    }
                    contentInfo.appendChild(contentCaption);
                    cellContent.appendChild(contentInfo);

                    return cellContent.outerHTML;
                }
            }
        }
    ],
    viewPreset : {
        base: TimeLine.hour_and_day,
    },
    weekStartDay: 1,
}