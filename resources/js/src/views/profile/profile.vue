<template>
    <div>
        <div class="vx-col w-full mb-base">
            <vx-card ref="view" title="Personal Information" collapseAction>
                <vs-row v-if="employee">
                    <vs-row class="mb-5">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <vs-avatar class="mx-auto mb-2 block" size="120px" :src="employee.image" />
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            {{employee.name}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            {{employee.roles[0].name}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            {{employee.email}}
                        </vs-col>
                    </vs-row>

                    <vs-row class="mt-5 mb-5">
                        <vs-col vs-type="flex" vs-align="center" vs-justify="center">
                            <vs-button :to="`/employee/${employee.id}/edit`" color="warning" type="filled" icon-pack="feather" icon="icon-edit">Edit Information</vs-button>
                        </vs-col>
                    </vs-row>
                </vs-row>
    
    
                <br>
                <template slot="footer">
                    <vs-divider/>
        
                    <div class="flex justify-around">
                            <span class="flex items-center" v-if="can('browse-invoice')">
                                <vx-tooltip text="Invoices">
                                    <vs-button :to="{name: 'browse-user-invoices',params:{id: $store.state.auth.AppActiveUser.id}}" color="primary" icon="icon-clipboard" icon-pack="feather" type="filled"></vs-button>
                                </vx-tooltip>
                            </span>
                        <span class="flex items-center" v-if="can('browse-transaction')">
                                <vx-tooltip text="Transactions">
                                    <vs-button :to="{name: 'browse-user-transactions',params:{id: $store.state.auth.AppActiveUser.id}}" color="dark" icon="icon-repeat" icon-pack="feather" type="filled"></vs-button>
                                </vx-tooltip>
                            </span>
                        <span class="flex items-center" v-if="can('create-seller-product')">
                                <vx-tooltip text="Edit user products">
                                    <vs-button :to="{name: 'edit-user-product',params:{id: $store.state.auth.AppActiveUser.id}}" color="success" icon="fa-tags" icon-pack="fa" type="filled"></vs-button>
                                </vx-tooltip>
                            </span>
                    </div>
                </template>

            </vx-card>
        </div>

        <view-agency v-if="employee && employee.agency_id" :agency_id="employee.agency_id"></view-agency>
    </div>
</template>

<script>
    import agency from "../agency/view";

    export default {
        name: "profile",
        mounted() {
            this.getEmployeeData();
        },
        data: () => {
            return {
                employee: null,
            }
        },
        components: {
            'view-agency': agency
        },
        methods: {
            getEmployeeData() {
                this.$vs.loading({container: this.$refs.view.$refs.content});
                this.$store.dispatch('user/view', this.$store.getters['auth/userData'].id)
                    .then(response => {
                        this.employee = response.data.data;
                        this.$vs.loading.close(this.$refs.view.$refs.content);
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.view.$refs.content);
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
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }
</style>
