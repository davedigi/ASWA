import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ModelDialog from './components/shared/ModelDialog'
import ModelDialog2 from './components/shared/ModelDialog2'
import ListProductsGrid from './components/ListProductsGrid'
import ListProductsTable from './components/ListProductsTable'
import Header from "./components/shared/Header"
import ListTransactionsTable from './components/ASWA/ListTransactionsTable'

export const Apptest = () => {
   return (
      <div className='border border-teal-800 divide-y-4 divide-teal-800'>
         <Header />
         <div className="mt-16"></div>
         {/* <ListProductsGrid /> */}
         {/* <ListProductsTable /> */}
         <ListTransactionsTable />
         <ModelDialog show={false} />
         <ModelDialog2 show={false} />
      </div>
   )
}

Apptest.propTypes = {
   prop: PropTypes
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Apptest)
