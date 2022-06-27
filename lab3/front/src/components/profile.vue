<template>
<div class="container mt-5 d-flex justify-content-center" id = "profile_card">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                        <div class="image"> <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="155"> </div>
                        <div class="ml-3 w-100">
                            <h4 class="mb-0 mt-0">Alex Morrision</h4> <span>Senior Journalist</span>
                            <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                <div class="d-flex flex-column"> <span class="articles">Articles</span> <span class="number1">38</span> </div>
                                <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">980</span> </div>
                                <div class="d-flex flex-column"> <span class="rating">Rating</span> <span class="number3">8.9</span> </div>
                            </div>
                            <div class="button mt-2 d-flex flex-row align-items-center"><button class="btn btn-sm btn-primary w-100 ml-2"><a href="https://www.youtube.com/watch?v=ybZmYvaqwEg&ab_channel=JoeShaman" class="prfile__link" target="_blank">Follow</a></button> </div>
                        </div>
                    </div>
                </div>
            </div> 
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        if (from.meta.auth === true){
            next();
        }
        else {
            next('/index');
        }
        to.meta.auth = from.meta.auth;
    },
}
</script>
