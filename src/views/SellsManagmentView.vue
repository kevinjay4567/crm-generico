<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import jsPDF from 'jspdf'
import { reactive } from 'vue'

interface PdfStruct {
  title: string
  description: string
}

const pdf: PdfStruct = reactive({
  title: '',
  description: '',
})
const doc = reactive<jsPDF>(new jsPDF())

const generatePdf = () => {
  doc.text(pdf.title, 10, 10)
  doc.text(pdf.description, 10, 20)
  doc.save('prueba.pdf')
}
</script>

<template>
  <BaseLayout>
    <div class="flex flex-col gap-2">
      <input type="text" v-model="pdf.title" name="title" placeholder="Titulo" />
      <textarea placeholder="Descripcion" v-model="pdf.description"></textarea>
    </div>
    <button @click="generatePdf()">Generar</button>
  </BaseLayout>
</template>
