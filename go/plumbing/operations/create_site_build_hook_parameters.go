// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"
	"time"

	"golang.org/x/net/context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/netlify/open-api/go/models"
)

// NewCreateSiteBuildHookParams creates a new CreateSiteBuildHookParams object
// with the default values initialized.
func NewCreateSiteBuildHookParams() *CreateSiteBuildHookParams {
	var ()
	return &CreateSiteBuildHookParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewCreateSiteBuildHookParamsWithTimeout creates a new CreateSiteBuildHookParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewCreateSiteBuildHookParamsWithTimeout(timeout time.Duration) *CreateSiteBuildHookParams {
	var ()
	return &CreateSiteBuildHookParams{

		timeout: timeout,
	}
}

// NewCreateSiteBuildHookParamsWithContext creates a new CreateSiteBuildHookParams object
// with the default values initialized, and the ability to set a context for a request
func NewCreateSiteBuildHookParamsWithContext(ctx context.Context) *CreateSiteBuildHookParams {
	var ()
	return &CreateSiteBuildHookParams{

		Context: ctx,
	}
}

// NewCreateSiteBuildHookParamsWithHTTPClient creates a new CreateSiteBuildHookParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewCreateSiteBuildHookParamsWithHTTPClient(client *http.Client) *CreateSiteBuildHookParams {
	var ()
	return &CreateSiteBuildHookParams{
		HTTPClient: client,
	}
}

/*CreateSiteBuildHookParams contains all the parameters to send to the API endpoint
for the create site build hook operation typically these are written to a http.Request
*/
type CreateSiteBuildHookParams struct {

	/*BuildHook*/
	BuildHook *models.BuildHook
	/*SiteID*/
	SiteID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the create site build hook params
func (o *CreateSiteBuildHookParams) WithTimeout(timeout time.Duration) *CreateSiteBuildHookParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the create site build hook params
func (o *CreateSiteBuildHookParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the create site build hook params
func (o *CreateSiteBuildHookParams) WithContext(ctx context.Context) *CreateSiteBuildHookParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the create site build hook params
func (o *CreateSiteBuildHookParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the create site build hook params
func (o *CreateSiteBuildHookParams) WithHTTPClient(client *http.Client) *CreateSiteBuildHookParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the create site build hook params
func (o *CreateSiteBuildHookParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBuildHook adds the buildHook to the create site build hook params
func (o *CreateSiteBuildHookParams) WithBuildHook(buildHook *models.BuildHook) *CreateSiteBuildHookParams {
	o.SetBuildHook(buildHook)
	return o
}

// SetBuildHook adds the buildHook to the create site build hook params
func (o *CreateSiteBuildHookParams) SetBuildHook(buildHook *models.BuildHook) {
	o.BuildHook = buildHook
}

// WithSiteID adds the siteID to the create site build hook params
func (o *CreateSiteBuildHookParams) WithSiteID(siteID string) *CreateSiteBuildHookParams {
	o.SetSiteID(siteID)
	return o
}

// SetSiteID adds the siteId to the create site build hook params
func (o *CreateSiteBuildHookParams) SetSiteID(siteID string) {
	o.SiteID = siteID
}

// WriteToRequest writes these params to a swagger request
func (o *CreateSiteBuildHookParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.BuildHook == nil {
		o.BuildHook = new(models.BuildHook)
	}

	if err := r.SetBodyParam(o.BuildHook); err != nil {
		return err
	}

	// path param site_id
	if err := r.SetPathParam("site_id", o.SiteID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
