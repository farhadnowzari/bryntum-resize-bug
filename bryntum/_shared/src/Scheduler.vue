<!--
 * Modified vue-cli/src/components/Scheduler.vue
-->
<template>
    <div class="b-scheduler-container"></div>
</template>

<script>
    // we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
    import { Scheduler } from 'bryntum-scheduler';
    // import { Scheduler } from 'bryntum-scheduler/scheduler.umd';

    // Defines a Vue component that wraps Bryntum Scheduler
    export default {

        name  : 'scheduler',

        props : {
            // Configs
            allowOverlap                     : { type : Boolean, default : undefined },
            animateRemovingRows              : { type : Boolean, default : undefined },
            autoAdjustTimeAxis               : { type : Boolean, default : undefined },
            autoHeight                       : { type : Boolean, default : undefined },
            barMargin                        : { type : Number, default : 5 },
            columnLines                      : { type : Boolean, default : undefined },
            columns                          : Array,
            contextMenuTriggerEvent          : String,
            createEventOnDblClick            : { type : Boolean, default : undefined },
            defaultResourceImageName         : String,
            disableGridRowModelWarning       : { type : Boolean, default : undefined },
            emptyText                        : String,
            enableDeleteKey                  : { type : Boolean, default : undefined },
            enableEventAnimations            : { type : Boolean, default : undefined },
            enableTextSelection              : { type : Boolean, default : undefined },
            endParamName                     : String,
            eventBarTextField                : { type : String, default : 'name' },
            eventBodyTemplate                : Function,
            eventColor                       : { type : String, default : 'green' },
            eventLayout                      : String,
            eventRenderer                    : Function,
            eventSelectionDisabled           : { type : Boolean, default : undefined },
            eventStyle                       : { type : String, default : 'plain' },
            endDate                          : Date,
            fillLastColumn                   : { type : Boolean, default : undefined },
            fullRowRefresh                   : { type : Boolean, default : undefined },
            fillTicks                        : { type : Boolean, default : undefined },
            forceFit                         : { type : Boolean, default : undefined },
            hideHeaders                      : { type : Boolean, default : undefined },
            horizontalEventSorterFn          : Function,
            loadMask                         : { type : String, default : 'Loading...' },
            longPressTime                    : { type : Number, default : 400 },
            maintainSelectionOnDatasetChange : { type : Boolean, default : undefined },
            managedEventSizing               : { type : Boolean, default : undefined },
            milestoneAlign                   : String,
            id                               : String,
            milestoneCharWidth               : { type : Number, default : 10 },
            milestoneLayoutMode              : { type : String, default : 'default' },
            multiEventSelect                 : { type : Boolean, default : undefined },
            passStartEndParameters           : { type : Boolean, default : undefined },
            readOnly                         : { type : Boolean, default : undefined },
            removeUnassignedEvent            : { type : Boolean, default : undefined },
            resizeToFitIncludesHeader        : { type : Boolean, default : undefined },
            responsiveLevels                 : { type : Object, default : undefined },
            resourceColumns                  : Object,
            resourceImagePath                : String,
            resourceMargin                   : Number,
            rowHeight                        : { type : Number, default : 50 },
            selectionMode                    : Object,
            showDirty                        : { type : Boolean, default : undefined },
            showRemoveRowInContextMenu       : { type : Boolean, default : undefined },
            snapRelativeToEventStartDate     : { type : Boolean, default : undefined },
            startDate                        : Date,
            startParamName                   : String,
            subGridConfigs                   : Object,
            triggerSelectionChangeOnRemove   : { type : Boolean, default : undefined },
            useInitialAnimation              : { type : [Boolean, String], default : undefined },
            viewPreset                       : { type : [String, Object], default : 'hourAndDay' },
            weekStartDay                     : Number,
            workingTime                      : Object,
            displayDateFormat                : String,
            flex                             : String,
            height                           : [Number, String],
            listeners                        : Object,
            maxHeight                        : [Number, String],
            maxWidth                         : [Number, String],
            maxZoomLevel                     : Number,
            minHeight                        : [Number, String],
            minWidth                         : [Number, String],
            minZoomLevel                     : Number,
            mode                             : String,
            partner                          : [Object, String],
            resourceTimeRanges               : [Object, Array],
            scrollLeft                       : Number,
            scrollTop                        : Number,
            selectedEvents                   : Array,
            snap                             : { type : Boolean, default : undefined },
            tickWidth                        : Number,
            timeResolution                   : Object,
            viewportCenterDate               : Date,
            width                            : [Number, String],
            zoomLevel                        : Number,
            zoomOnMouseWheel                 : { type : Boolean, default : undefined },
            zoomOnTimeAxisDoubleClick        : { type : Boolean, default : undefined },

            // Stores
            assignmentStore : Object,
            dependencyStore : Object,
            eventStore      : Object,
            resourceStore   : Object,

            crudManager : Object,

            // Data
            assignments  : Array,
            dependencies : Array,
            events       : Array,
            resources    : Array,
            timeRanges   : Array,

            config : Object,

            // Features, only used for initialization
            cellEditFeature            : { type : [Boolean, Object], default : undefined },
            cellTooltipFeature         : { type : [Boolean, Object], default : undefined },
            columnDragToolbarFeature   : { type : [Boolean, Object], default : undefined },
            columnLinesFeature         : { type : Boolean, default : undefined },
            columnPickerFeature        : { type : [Boolean, Object], default : undefined },
            columnReorderFeature       : { type : [Boolean, Object], default : undefined },
            columnResizeFeature        : { type : [Boolean, Object], default : undefined },
            contextMenuFeature         : { type : [Boolean, Object], default : undefined },
            dependenciesFeature        : { type : [Boolean, Object], default : undefined },
            dependencyEditFeature      : { type : [Boolean, Object], default : undefined },
            eventContextMenuFeature    : { type : [Boolean, Object], default : undefined },
            eventDragFeature           : { type : [Boolean, Object], default : undefined },
            eventDragCreateFeature     : { type : [Boolean, Object], default : undefined },
            eventDragSelectFeature     : { type : Boolean, default : undefined },
            eventEditFeature           : { type : [Boolean, Object], default : undefined },
            eventFilterFeature         : { type : [Boolean, Object], default : undefined },
            eventResizeFeature         : { type : [Boolean, Object], default : undefined },
            eventTooltipFeature        : { type : [Boolean, Object], default : undefined },
            filterBarFeature           : { type : [Boolean, Object], default : undefined },
            filterFeature              : { type : [Boolean, Object], default : undefined },
            groupFeature               : { type : [Boolean, Object, String], default : undefined },
            groupSummaryFeature        : { type : [Boolean, Object], default : undefined },
            headerContextMenuFeature   : { type : [Boolean, Object], default : undefined },
            headerZoomFeature          : { type : Boolean, default : undefined },
            labelsFeature              : { type : [Boolean, Object], default : undefined },
            nonWorkingTimeFeature      : { type : [Boolean, Object], default : undefined },
            panFeature                 : { type : [Boolean, Object], default : undefined },
            pdfExportFeature           : { type : [Boolean, Object], default : undefined },
            quickFindFeature           : { type : [Boolean, Object], default : undefined },
            recurringTimeSpansFeature  : { type : [Boolean, Object], default : undefined },
            regionResizeFeature        : { type : Boolean, default : undefined },
            resourceTimeRangesFeature  : { type : [Boolean, Object], default : undefined },
            rowReorderFeature          : { type : Boolean, default : undefined },
            scheduleContextMenuFeature : { type : [Boolean, Object], default : undefined },
            scheduleTooltipFeature     : { type : [Boolean, Object], default : undefined },
            searchFeature              : { type : [Boolean, Object], default : undefined },
            sortFeature                : { type : [Boolean, Object, String, Array], default : undefined },
            simpleEventEdit            : { type : [Boolean, Object], default : undefined },
            stripeFeature              : { type : Boolean, default : undefined },
            summaryFeature             : { type : [Boolean, Object], default : undefined },
            timeRangesFeature          : { type : [Boolean, Object], default : undefined },
            treeFeature                : { type : [Boolean, Object], default : undefined }
        }, // eo props

        computed : {
            /**
             * @deprecated in favor of schedulerInstance
             */
            schedulerEngine() {
                console.warn('schedulerEngine is deprecated. Use schedulerInstance instead.')
                return this.schedulerInstance;
            }
        },

        // runs after the component is attached to DOM (mounted)
        mounted() {
            const propKeys = Object.keys(this.$props);

            const config = {
                // Render grid to components element
                appendTo : this.$el,

                // Listeners, will relay events using $emit
                listeners : {
                    catchAll(event) {
                        // Uncomment this line to log events being emitted to console
                        //console.log(event.type);
                        this.$emit(event.type, event);
                    },

                    thisObj : this
                },

                features : {}
            };

            // Apply all props to grid config
            propKeys.forEach(prop => {
                let match;
                if ((match = prop.match(/(.*)Feature/)) && this[prop] !== undefined) {
                    // Prop which ends with Feature is a feature config
                    config.features[match[1]] = this[prop];
                }
                else if (prop === 'config') {
                    // Prop is a config object
                    Object.assign(config, this[prop]);
                }
                else {
                    // Prop is a config
                    if (this[prop] !== undefined) {
                        config[prop] = this[prop];
                    }

                    // Set up a watcher
                    this.$watch(prop, newValue => {
                        this.schedulerInstance[prop] = Array.isArray(newValue) ? newValue.slice() : newValue;
                    });
                }
            }, this);

            // console.log('config=', config, 'props=', this.$props);

            // Create a Bryntum Grid with props as configs
            this.schedulerInstance = new Scheduler(config);

        }, // eo function mounted

        // cleanup before destroy
        beforeDestroy() {
            // Make sure Bryntum Grid is destroyed when vue component is
            this.schedulerInstance.destroy();
        } // eo function beforeDestroy

    }; // eo scheduler export

</script>

<!-- eof -->
