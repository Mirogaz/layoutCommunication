<template>
    <div class='card'>
        <div class='card__'>
            <div class='card__date'>
                <div class='card__date-create'>
                    {{ 
                        getDate 
                    }}
                </div>
                <div class='card__date-time'>
                8:00 - 8:45
                </div>
                <span class='card__date-link'>Звонок в ZOOM</span>
                <span class='card__date-edit' @click='editCard'>Редактировать</span>
                <span class='card__delete' @click='deleteCard'>&#10006;</span>
            </div>
            <div class='card__title'>
                <p class='card__title_text'>{{ title }}</p>
            </div>
            <div class='card__user'>
                <div class='card__user-logo'><img src='@/assets/img/photo.jpg' alt='Картинка' /></div>
                <div class='card__user-logo'><img src='@/assets/img/photo.jpg' alt='Картинка' /></div>
                <div class='card__user-logo'><img src='@/assets/img/photo.jpg' alt='Картинка' /></div>
                <div class='card__user-logo'><img src='@/assets/img/photo.jpg' alt='Картинка' /></div>
                <div class='card__user-logo'><img src='@/assets/img/photo.jpg' alt='Картинка' /></div>
            </div>
        </div>
        </div>
</template>

<script>

export default {
    data() {
        return {
            date: '',
            startEdit: false
        }
    },
    props: {
        title: String,
        setIdCard: String
    },
    methods: {
        deleteCard() {
            this.$emit('deleteCard', this.setIdCard);
        },
        editCard() {
            this.startEdit = true
            this.$emit('editCard', this.startEdit)
            this.$emit('idNewEventCard', this.setIdCard)
        },

    },
    computed: {
        getDate() {
            const nowDate = new Date();
            return [...this.date] = `${((nowDate.getDate()) < 10 ? '0' : '')+nowDate.getDate()}.${((nowDate.getMonth()+1) < 10 ? '0' : '') + (nowDate.getMonth()+1)}`
        },
    }
}
</script>

<style lang='scss'>
    @import 'CardStyle.scss';
</style>