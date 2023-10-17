// Code generated by pulumi-gen-awsx DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package ecr

import (
	"context"
	"reflect"

	"errors"
	"github.com/pulumi/pulumi-awsx/sdk/v2/go/awsx/internal"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumix"
)

// Builds a docker image and pushes to the ECR repository
type Image struct {
	pulumi.ResourceState

	// Unique identifier of the pushed image
	ImageUri pulumi.StringOutput `pulumi:"imageUri"`
}

// NewImage registers a new resource with the given unique name, arguments, and options.
func NewImage(ctx *pulumi.Context,
	name string, args *ImageArgs, opts ...pulumi.ResourceOption) (*Image, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.RepositoryUrl == nil {
		return nil, errors.New("invalid value for required argument 'RepositoryUrl'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource Image
	err := ctx.RegisterRemoteComponentResource("awsx:ecr:Image", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

type imageArgs struct {
	// An optional map of named build-time argument variables to set during the Docker build.  This flag allows you to pass built-time variables that can be accessed like environment variables inside the `RUN` instruction.
	Args map[string]string `pulumi:"args"`
	// The version of the Docker builder.
	BuilderVersion *BuilderVersion `pulumi:"builderVersion"`
	// Images to consider as cache sources
	CacheFrom []string `pulumi:"cacheFrom"`
	// Path to a directory to use for the Docker build context, usually the directory in which the Dockerfile resides (although dockerfile may be used to choose a custom location independent of this choice). If not specified, the context defaults to the current working directory; if a relative path is used, it is relative to the current working directory that Pulumi is evaluating.
	Context *string `pulumi:"context"`
	// dockerfile may be used to override the default Dockerfile name and/or location.  By default, it is assumed to be a file named Dockerfile in the root of the build context.
	Dockerfile *string `pulumi:"dockerfile"`
	// An optional catch-all list of arguments to provide extra CLI options to the docker build command.  For example `['--network', 'host']`.
	ExtraOptions []string `pulumi:"extraOptions"`
	// The architecture of the platform you want to build this image for, e.g. `linux/arm64`.
	Platform *string `pulumi:"platform"`
	// Url of the repository
	RepositoryUrl string `pulumi:"repositoryUrl"`
	// The target of the dockerfile to build
	Target *string `pulumi:"target"`
}

// The set of arguments for constructing a Image resource.
type ImageArgs struct {
	// An optional map of named build-time argument variables to set during the Docker build.  This flag allows you to pass built-time variables that can be accessed like environment variables inside the `RUN` instruction.
	Args pulumi.StringMapInput
	// The version of the Docker builder.
	BuilderVersion *BuilderVersion
	// Images to consider as cache sources
	CacheFrom pulumi.StringArrayInput
	// Path to a directory to use for the Docker build context, usually the directory in which the Dockerfile resides (although dockerfile may be used to choose a custom location independent of this choice). If not specified, the context defaults to the current working directory; if a relative path is used, it is relative to the current working directory that Pulumi is evaluating.
	Context pulumi.StringPtrInput
	// dockerfile may be used to override the default Dockerfile name and/or location.  By default, it is assumed to be a file named Dockerfile in the root of the build context.
	Dockerfile pulumi.StringPtrInput
	// An optional catch-all list of arguments to provide extra CLI options to the docker build command.  For example `['--network', 'host']`.
	ExtraOptions pulumi.StringArrayInput
	// The architecture of the platform you want to build this image for, e.g. `linux/arm64`.
	Platform pulumi.StringPtrInput
	// Url of the repository
	RepositoryUrl pulumi.StringInput
	// The target of the dockerfile to build
	Target pulumi.StringPtrInput
}

func (ImageArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*imageArgs)(nil)).Elem()
}

type ImageInput interface {
	pulumi.Input

	ToImageOutput() ImageOutput
	ToImageOutputWithContext(ctx context.Context) ImageOutput
}

func (*Image) ElementType() reflect.Type {
	return reflect.TypeOf((**Image)(nil)).Elem()
}

func (i *Image) ToImageOutput() ImageOutput {
	return i.ToImageOutputWithContext(context.Background())
}

func (i *Image) ToImageOutputWithContext(ctx context.Context) ImageOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ImageOutput)
}

func (i *Image) ToOutput(ctx context.Context) pulumix.Output[*Image] {
	return pulumix.Output[*Image]{
		OutputState: i.ToImageOutputWithContext(ctx).OutputState,
	}
}

// ImageArrayInput is an input type that accepts ImageArray and ImageArrayOutput values.
// You can construct a concrete instance of `ImageArrayInput` via:
//
//	ImageArray{ ImageArgs{...} }
type ImageArrayInput interface {
	pulumi.Input

	ToImageArrayOutput() ImageArrayOutput
	ToImageArrayOutputWithContext(context.Context) ImageArrayOutput
}

type ImageArray []ImageInput

func (ImageArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Image)(nil)).Elem()
}

func (i ImageArray) ToImageArrayOutput() ImageArrayOutput {
	return i.ToImageArrayOutputWithContext(context.Background())
}

func (i ImageArray) ToImageArrayOutputWithContext(ctx context.Context) ImageArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ImageArrayOutput)
}

func (i ImageArray) ToOutput(ctx context.Context) pulumix.Output[[]*Image] {
	return pulumix.Output[[]*Image]{
		OutputState: i.ToImageArrayOutputWithContext(ctx).OutputState,
	}
}

// ImageMapInput is an input type that accepts ImageMap and ImageMapOutput values.
// You can construct a concrete instance of `ImageMapInput` via:
//
//	ImageMap{ "key": ImageArgs{...} }
type ImageMapInput interface {
	pulumi.Input

	ToImageMapOutput() ImageMapOutput
	ToImageMapOutputWithContext(context.Context) ImageMapOutput
}

type ImageMap map[string]ImageInput

func (ImageMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Image)(nil)).Elem()
}

func (i ImageMap) ToImageMapOutput() ImageMapOutput {
	return i.ToImageMapOutputWithContext(context.Background())
}

func (i ImageMap) ToImageMapOutputWithContext(ctx context.Context) ImageMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ImageMapOutput)
}

func (i ImageMap) ToOutput(ctx context.Context) pulumix.Output[map[string]*Image] {
	return pulumix.Output[map[string]*Image]{
		OutputState: i.ToImageMapOutputWithContext(ctx).OutputState,
	}
}

type ImageOutput struct{ *pulumi.OutputState }

func (ImageOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Image)(nil)).Elem()
}

func (o ImageOutput) ToImageOutput() ImageOutput {
	return o
}

func (o ImageOutput) ToImageOutputWithContext(ctx context.Context) ImageOutput {
	return o
}

func (o ImageOutput) ToOutput(ctx context.Context) pulumix.Output[*Image] {
	return pulumix.Output[*Image]{
		OutputState: o.OutputState,
	}
}

// Unique identifier of the pushed image
func (o ImageOutput) ImageUri() pulumi.StringOutput {
	return o.ApplyT(func(v *Image) pulumi.StringOutput { return v.ImageUri }).(pulumi.StringOutput)
}

type ImageArrayOutput struct{ *pulumi.OutputState }

func (ImageArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Image)(nil)).Elem()
}

func (o ImageArrayOutput) ToImageArrayOutput() ImageArrayOutput {
	return o
}

func (o ImageArrayOutput) ToImageArrayOutputWithContext(ctx context.Context) ImageArrayOutput {
	return o
}

func (o ImageArrayOutput) ToOutput(ctx context.Context) pulumix.Output[[]*Image] {
	return pulumix.Output[[]*Image]{
		OutputState: o.OutputState,
	}
}

func (o ImageArrayOutput) Index(i pulumi.IntInput) ImageOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *Image {
		return vs[0].([]*Image)[vs[1].(int)]
	}).(ImageOutput)
}

type ImageMapOutput struct{ *pulumi.OutputState }

func (ImageMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Image)(nil)).Elem()
}

func (o ImageMapOutput) ToImageMapOutput() ImageMapOutput {
	return o
}

func (o ImageMapOutput) ToImageMapOutputWithContext(ctx context.Context) ImageMapOutput {
	return o
}

func (o ImageMapOutput) ToOutput(ctx context.Context) pulumix.Output[map[string]*Image] {
	return pulumix.Output[map[string]*Image]{
		OutputState: o.OutputState,
	}
}

func (o ImageMapOutput) MapIndex(k pulumi.StringInput) ImageOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *Image {
		return vs[0].(map[string]*Image)[vs[1].(string)]
	}).(ImageOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*ImageInput)(nil)).Elem(), &Image{})
	pulumi.RegisterInputType(reflect.TypeOf((*ImageArrayInput)(nil)).Elem(), ImageArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*ImageMapInput)(nil)).Elem(), ImageMap{})
	pulumi.RegisterOutputType(ImageOutput{})
	pulumi.RegisterOutputType(ImageArrayOutput{})
	pulumi.RegisterOutputType(ImageMapOutput{})
}
