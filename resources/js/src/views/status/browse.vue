<template>
	<div class="vx-col w-full mb-base" v-if="can('browse-status')">

		<div class="centerx">
			<vs-row>
				<vs-col vs-align="center" vs-justify="center" vs-type="flex" vs-w="9">
					<b class="text-left vx-col w-full">{{statuses.length}} results found in {{resultTime}}ms</b>
				</vs-col>
			</vs-row>
		</div>

		<vx-card ref="browse">
			<vs-table
				:data="statuses"
				max-items="50"
				pagination
				search
			>

				<template slot="header" v-if="can('create-status')">
					<vs-button :to="{name: 'create-status'}" color="primary" icon="icon-plus" icon-pack="feather" type="filled"
					           vs-w="3">Add Status
					</vs-button>
				</template>

				<template slot="thead">
					<vs-th>#</vs-th>
					<vs-th>Name</vs-th>
					<vs-th>Action</vs-th>
				</template>

				<template slot-scope="{data}">
					<vs-tr :key="index" v-for="(shipping, index) in data">
						<vs-td :data="shipping.id">
							{{ shipping.id }}
						</vs-td>


						<vs-td :data="shipping.name">
							{{ shipping.name}}
						</vs-td>

						<vs-td>
							<vs-row>
								<div class="flex mb-4">
									<div class="w-1/3 mx-3" v-if="can('delete-status') && index>=8">
										<vs-button :id="`btn-delete-${shipping.id}`" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteStatus(shipping)" class="vs-con-loading__container"
										           color="danger"
										           icon="icon-trash"
										           icon-pack="feather" radius
										           type="border"></vs-button>
									</div>
								</div>
							</vs-row>
						</vs-td>
					</vs-tr>
				</template>
			</vs-table>
		</vx-card>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                searchText: "",
                resultTime: 0,
                statuses: [],
                is_requesting: false
            }
        },
        props: {
            payload: {
                required: false,
                default: ''
            }
        },
        mounted() {
            this.getStatuses();
        },

        methods: {
            getStatuses() {
                this.$vs.loading({container: this.$refs.browse.$el});
                this.$store.dispatch('status/getData', this.payload)
                    .then(response => {
                        this.statuses = response.data.data;
                        console.log(this.statuses)
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'})

                    })
	                .then(()=>{this.$vs.loading.close(this.$refs.browse.$el);});
            },

            viewStatus(id) {
                this.$router.push({name: 'view-status', params: {'id': id}})
            },
            editStatus(id) {
                this.$router.push({name: 'edit-status', params: {'id': id}})
            },
            confirmDeleteStatus(item) {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteStatus,
                    parameters: item
                });
            },

            deleteStatus(item) {
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('status/delete', item.id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.statuses = this.statuses.filter(type => {
                            return type.id !== item.id
                        });
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            }
        }
    }
</script>

<style>
	.txt-hover:hover {
		cursor: pointer;
		color: black !important;
	}

</style>
