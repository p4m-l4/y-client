<template>
	<div class="container-fluid" style="margin-top: 15px">
		<div class="row">
            <div class="col-12">
                <div class="card" style="width: 18rem">
                    <img src="" class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{{name}}</h5>
                        <p class="card-text">{{description}}
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductComponent",
    props: {
        name: {
            type: String,
            required: true},
        description: String
    }
};
</script>

<style>

</style>
